import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
	 message: Object[] = [{
	 	profile_image: "http://wimg.spriteapp.cn/profile/large/2018/02/07/5a7b1171a0797_mini.jpg",
	 	name: "木棉花的春天丶",
	 	message: "为什么美国人从不给手机贴膜，中国人却一定要贴？",
	 	time: "10:08",
	 	total: "1"
	 },{
	 	profile_image: "http://wimg.spriteapp.cn/profile/large/2017/03/01/58b6ed2126d85_mini.jpg",
	 	name: "搞笑内涵侠",
	 	message: "有这样的老师，就是不放学也值了",
	 	time: "23:56",
	 	total: "3"
	 },{
	 	profile_image: "http://wimg.spriteapp.cn/profile/large/2016/10/07/57f7b339ed872_mini.jpg",
	 	name: "孤独的时候给我打电话",
	 	message: "这扣篮碉堡了，算分不",
	 	time: "13:32",
	 	total: "6"
	 }];

  constructor(public navCtrl: NavController) {

  }
  delete(i:number){
  	this.message.splice(i,1);
  }

}
