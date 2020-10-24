import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: [
  ]
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
   
    this.formData = {
      OrderItemID: null,
      OrderID: this.data.OrderID,
      ItemID: 0,
      ItemName: '',
      Price: 0,
      Quantity: 0,
      Total: 0
  }

}
updatePrice(ctrl) {
  if (ctrl.selectedIndex == 0) {
    this.formData.Price = 0;
    
  }
  else {
    this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
  }
    
  }
}