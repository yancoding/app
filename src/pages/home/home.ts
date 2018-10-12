import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = [{
    id: 0,
    type: 1,
    page:1,
    title: "推荐",
    data: []
  },{
    id: 1,
    type: 2,
    page:1,
    title: "文字",
    data: []
  },{
    id: 2,
    type: 3,
    page:1,
    title: "图片",
    data: []
  }];
  home: number = 0;
  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    private http: Http,
  	) {
    this.requestData(0);
    this.requestData(1);
    this.requestData(2);
  }
  // 请求数据并push到data
  requestData(index: number){
    const url = "https://www.apiopen.top/satinApi?type=" + this.data[index].type + "&page=" + this.data[index].page;
    this.http.request(url)
    .subscribe((res: Response) => {
      let reqData =  res.json().data;
      for(let i=0; i<reqData.length; i++){
        this.data[index].data.push(reqData[i]);
      }
    });
    console.log(this.data[index].data);
  }
  // 图片模态框
  presentModal(url: string){
  	let modal = this.modalCtrl.create(ModalPage,{url:url});
  	modal.present();
  }
  // 下拉刷新
  doRefresh(index: number,refresher) {
    this.data[index].page = 1;
    this.data[index].data = [];
    this.requestData(index);
    console.log(refresher.deltaY);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  // 上拉加载
  doInfinite(index: number,infiniteScroll){
    this.data[index].page ++;
    this.requestData(index);
    setTimeout(() => {
      infiniteScroll.complete();
    }, 2000);
  }

  ionViewDidLoad(){
    
  }

}
