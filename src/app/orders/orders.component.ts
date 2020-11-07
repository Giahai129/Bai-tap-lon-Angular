import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../shared/order.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})
export class OrdersComponent implements OnInit {
orderList;
  constructor(private service:OrderService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshList();
  
  }

  refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }
  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }
  onOrderDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa bản ghi này?')) {
      this.service.deleteOrder(id).then(res => {
        this.refreshList();
        this.toastr.warning("Đã Xóa Thành Công", "App Đặt Món Ăn.");
      });
    }
  }
}
