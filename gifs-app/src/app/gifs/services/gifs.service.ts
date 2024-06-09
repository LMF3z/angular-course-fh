import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private GIPHY_API_KEY: string = '';
  private GIPHY_URL = 'https://api.giphy.com/v1/gifs';

  private _tagHistory: string[] = [];
  private _gifList: Gif[] = [];

  constructor(private readonly http: HttpClient) {
    this.readLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  get gifsList(): Gif[] {
    return [...this._gifList];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((a) => a !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history-gifs', JSON.stringify(this._tagHistory));
  }
  private readLocalStorage() {
    const data = localStorage.getItem('history-gifs');
    if (!data) return;

    const dataParse = JSON.parse(data!);

    this._tagHistory = dataParse;

    this.searchTag(dataParse[0]);
  }

  public async searchTag(tag: string) {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.GIPHY_URL}/search`, { params })
      .subscribe((res) => {
        this._gifList = res.data;
      });
  }
}
