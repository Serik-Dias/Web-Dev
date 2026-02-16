import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Новый iPhone 15 с инновационным дизайном и мощным процессором A16 Bionic.',
      price: 365000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h11/83559338442782.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h13/h14/83559338508318.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/83559338573854.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2,
      name: 'Наушники Apple AirPods Pro 2 with Type-C',
      description: 'Активное шумоподавление, прозрачный режим и адаптивный звук для идеального прослушивания.',
      price: 110000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h64/84108189696030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h55/84108189761566.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113677582/'
    },
    {
      id: 3,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8GB / 256GB / macOS / MGN63 / серый',
      description: 'Самый тонкий и легкий ноутбук Apple теперь стал еще мощнее благодаря чипу M1.',
      price: 395000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h3c/63947825479710.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8gb-256gb-macos-mgn63-seryi-100797845/'
    },
    {
      id: 4,
      name: 'Фитнес-браслет Xiaomi Smart Band 10 черный',
      description: 'Xiaomi Smart Band 10 — стильный и функциональный фитнес-браслет в черном цвете, который станет вашим надежным помощником в достижении спортивных целей и контроле здоровья.',
      price: 23415,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p05/49520025.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p04/49520029.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000'
    },
    {
      id: 5,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Новая облегченная версия легендарной консоли с потрясающей графикой 4K и SSD на 1ТБ.',
      price: 245000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h18/84533314027550.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/h3a/84533314093086.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 6,
      name: 'Умная колонка Яндекс Станция Миди с Алисой',
      description: 'Мощный звук в компактном корпусе, встроенный хаб управления Zigbee.',
      price: 74900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h6a/86495017107486.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h61/h9c/84450122956830.jpg'],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?c=750000000'
    },
    {
      id: 7,
      name: 'Планшет Apple iPad Air 2024 11" 128Gb',
      description: 'Новый iPad Air на базе сверхмощного чипа Apple M2.',
      price: 335000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc4/h94/86042944733214.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000'
    },
    {
      id: 8,
      name: 'Фен Dyson Supersonic HD15 серый/розовый',
      description: 'Профессиональный уход за волосами с интеллектуальным контролем температуры.',
      price: 185000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h31/ha7/80833333395486.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-id-hs08-601848-01-rozovoe-zoloto-stailer-rozovyi-145797988/?c=750000000'
    },
    {
      id: 9,
      name: 'Электрочайник Xiaomi Smart Kettle Pro',
      description: 'Умный чайник с OLED-дисплеем и точной настройкой температуры.',
      price: 18900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/hab/83562502160414.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h90/h57/63951239184414.jpg'],
      link: 'https://kaspi.kz/shop/p/elektrochainik-xiaomi-mi-smart-kettle-pro-mjhwsh02ym-belyi-100719609/?c=750000000'
    },
    {
      id: 10,
      name: 'Часы Apple Watch Series 9 45 мм черный',
      description: 'Самые мощные часы Apple с новым жестом двойного смыкания пальцев.',
      price: 195000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h84/h1c/83559345389598.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000'
    }
  ];
}