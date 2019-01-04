import { Component, OnInit } from '@angular/core';
import { Calculation } from '../calculation';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.css']
})
export class CalculationFormComponent implements OnInit {

  model = new Calculation('','');

  onSubmit() {
    this.calculationService.postCalculation(this.model)
      .subscribe(answer => console.log(answer));
  }

  onReset() {
    this.model = new Calculation('','');
  }

  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
  }

}
