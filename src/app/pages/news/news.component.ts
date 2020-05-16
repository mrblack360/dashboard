import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../shared/services/news/news.service';
import { News } from '../../shared/interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: News = {};
  date = new Date();
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news: News) => {
      this.news = news;
    });
  }
}
