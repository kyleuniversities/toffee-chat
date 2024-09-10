import { Component, OnInit } from '@angular/core';
import { FieldCardBodyComponent } from '../field-card-body/field-card-body.component';
import { FieldCardBottomSpaceComponent } from '../field-card-bottom-space/field-card-bottom-space.component';
import { FieldCardComponent } from '../field-card/field-card.component';
import { FieldCardExtendedBottomSpaceComponent } from '../field-card-extended-bottom-space/field-card-extended-bottom-space.component';
import { FieldCardHeaderComponent } from '../field-card-header/field-card-header.component';
import { FieldCardLiftedSpaceComponent } from '../field-card-lifted-space/field-card-lifted-space.component';
import { FieldCardTopSpaceComponent } from '../field-card-top-space/field-card-top-space.component';
import { ProfileBoxContainerComponent } from '../profile-box-container/profile-box-container.component';
import { Apollo } from 'apollo-angular';
import { GET_USER } from '../graphql.operations';

@Component({
  selector: 'app-site-left-body',
  standalone: true,
  imports: [FieldCardBodyComponent, FieldCardBottomSpaceComponent, FieldCardComponent, FieldCardExtendedBottomSpaceComponent, FieldCardHeaderComponent, FieldCardLiftedSpaceComponent, FieldCardTopSpaceComponent, ProfileBoxContainerComponent],
  templateUrl: './site-left-body.component.html',
  styleUrl: './site-left-body.component.css'
})
export class SiteLeftBodyComponent implements OnInit {
  userData: any

  constructor(private apollo: Apollo) {
    // Do Nothing
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_USER,
      variables: { userId: "33" }
    }).valueChanges.subscribe(({data, error}: any) => {
      this.userData = data.userById[0]
    })
  }
}
