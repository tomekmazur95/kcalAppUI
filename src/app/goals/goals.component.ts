import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {UserInfoResponse} from "../../AuthenticationResponse";
import {ResponseTdeeDTO} from "../../ResponseTdeeDTO";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {

  public userInfo: UserInfoResponse;
  public userTdee: ResponseTdeeDTO;

  constructor(
    private userClient: UserClient,
    private calCalcClient: CaloriesCalculatorClient,
  ) {
  }

  ngOnInit(): void {

    this.userClient.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.calCalcClient.getUserTdee(this.userInfo.id)
        .subscribe(tdee => this.userTdee = tdee)
    });
  }
}