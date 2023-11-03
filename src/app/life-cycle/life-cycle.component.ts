import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges{
  ngOnInit(): void {
      console.log("Life Cycle OnInit");
  }

  regNo = "regNo";

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Life Cycle OnChanges");
  }
}
