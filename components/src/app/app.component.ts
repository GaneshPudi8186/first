import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components';
  count=0;
  img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAaVBMVEX///8AAAD+/v4EBASkpKTExMTh4eGOjo4oKCgvLy/Ly8v7+/u3t7fs7Ozy8vLl5eVfX1/Z2dlnZ2d+fn5HR0d4eHicnJxBQUFaWlqVlZXT09NycnJOTk6EhIQdHR05OTkPDw8XFxeurq7kPhA0AAAGeklEQVR4nO2biYKiOhBFIYBbSFhUEFCk/f+PfKlUQIFg241A+yZ3ZhgFlUOlUktEyzIyMjIyMjIyMjIyMvobIoTAxiJLg7wmAUqoJZmXRnlJyGvBvw8QqR2BfIR1AZdFecSXBvlWhKBF/fiQHo4e7oA9PTuT2vZLjgDCBbEt5Rw5hghKe34Bz8VeumQAoXB65pZ2rS+fU1JbuCPp4mTRCSl480IaVvx14MElBzDaY1JzkZJFJyRP0jur5D24VGWOrhiD7ZK00VmiOrUzwCPnFOhemqTb7dmf33elC8KoWiyz9UrAjg0ZzLvggEdiZs3su3ImCRbqh9IBHA1v6ImsTGs7iulYoMvYdjG7dQFVEFw2cvB7tNI3thlrPFiQ+xg84LXR/Lxi46V2Q9Djhe15ZzXziq7rvY59mRcWxpZGccOmB4ad+wC9V4xEfL+004ygWMzwW9rla4yKwQF3nXwuky9h8f2l4Xy4VNa00b7soireJlkobS4rWVsCrqMGIpzPd2W2crc6j63Srm/IBxtfjsnu8GDdmXDBFejq0AUFg1bFysrPVZsWH4YRhdjgfqkrmBHXWiWb+7DelbrgpEFyvdtdZWWxvboM3uoVXzNZl+CEEdHrVHU8Vv5X5FS+iu7CdqjAWfcV58DLbuUsuNiIiYCQlQ/Wa7aVz4VPY4nLXVsX27YJhath53lw4S/108d5X8er8sgw3WIvbAUw5m1ceHb2JOTtIOLu1LgAElxUynUau8Kj0KeYlnM3wsnIBZIudSSBvJp9PDEuljOnOle1PDNbqTzrHmxRHaKdo2M7/IrAAa+NIaZZPJ8aV1SKcdlMrkeXhLoLm7VK+QW2N/6m7Q14oZvYqufsRKQUrMX97sDKybTJuGram2Ztc+M4MdmlquPC4wWWYlZaQ73cO3DFv92x54cCoQpziG+0jl5KENMg9xHvdC/C7qr2OTak01hY+Jp7tTuVADzZJAFeDYPc8KA04Tjeq6xSjtA6fhUDQCdyX1HOhLpmwT6BEeHPTiaOhkmaPZLvFD3ytd7XGpYiQod5v2Ri6If9bSKOQbXD1nd723c22UmAn2TbDq58skneuTyFKwGQGMD/+jH0ax9h28jxuCaLhZ4CygvHdvqfEe9osww11i/qmRtkj+GoiblXn2MsXl3a4erRgps1QxKO5abTMXEqoko94Ubyqq7c61WK8pTHlYqcfrejaOvkKftFce8YePA5f4NlJS5cNTvavXggnh1UYiBR0R/ih4GAI5cAqyPqX3uvgI0cgHfgqnKmx4FDTK06uj0xLhxLfY6Fz6rXLUlDQNZ+A67F11+t2kBVX2dPVV1RUdmvqNxH2Ltz/3y/inumK7O3JLjuWhJ+esJwtZMnvcEdVOpikUCC9aNdG92s8bxR23boiQeYGjB40dnunvSZwgAbaDV1O+9L64puhG798hpTK/Rjbv+cz1W6DKccy67Sr9o1zyhYuSR/6QEdZTkjDvqhrrN8IsCLPQxpND/1Dmd0hHnlO+m+QwNlobwQfim753uF96HUTLofsOajF1ATeZqauTqqrob2E8fLOu0oOlNef+uCF1K542vJvP40DJ4U58rqxeilEXDtGcYA6sqyx8HwmEajV/8JlfW4nPzVvm4YfX3D+BKtJAs9isD5QyuXjS99xfQv1IlSD78oE91i+ZPo1cXFsmfP0CG4V3twwaG1GIlLiPw+x95eVOdFbz+fYj0Di225o5iVWQHFXOpy+qZvgtjO2wV1/Cm+o3mJGDbHSDUSgfh8PkFfTCzv9Zz7va7RtN8KE8vt94cj5E1LC7g/yGKv4E7Iq3Dfp920a07SGd4mZ2JnsN5tXYNrcA3ur3B1CeRZUlkSt9fZ3vf/RdxfaFHc2Nfp9MS+S+LG+oXaVX8V70/gwjo5VSusj8sx/vB4LIi7WQ3cxLYbWPn9q7jbz8IdbkAWxtXc+ko+zroG1+AaXIP7Qbjas/9d3A+zrsGdEtf4rsH9VNz/ve9OqmfL0f8E7mKL/b/x3cm/m/AHv7r+jXV3U8LK2yAH7wv4Be4pmPpebjr0qzSBO/AWLS58O1e50/9ajYVaWAdwdaaiWlwZDQs2x48XB+52LPXWJWRgjWyTzPFTS7iRMVnrxHTWhdvyMt2rk8lu3G1r+BRaWw0bEO4XmZqXWNr5/+QnqbqbFPCe4MnukjcyMjIyMjIyMjIyMjIyMjIyMjIyMjIao/8AOUVQGmV/2aMAAAAASUVORK5CYII=";
  Incr()
  {
    this.count++;
  }
  Decr()
  {
    if(this.count>0)
    this.count--;
  else 
  this.count=0;
  }
  pro=
  {
   
  image:"https://images.pexels.com/photos/18460973/pexels-photo-18460973/free-photo-of-woman-holding-analog-camera-against-monstera-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
   name:"camera",
   price:60000
  }
  pro1=
  {
    image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    name:"shoes",
    price:600
  }
}
