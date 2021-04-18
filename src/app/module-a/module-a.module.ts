import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ModuleAComponent } from './module-a.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { CardComponent } from './card/card.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgCardComponent } from './ng-card/ng-card.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgClassStyleComponent } from './ng-class-style/ng-class-style.component';
import { TempReferComponent } from './temp-refer/temp-refer.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    ModuleAComponent,
    ComponentAComponent,
    ComponentBComponent,
    ChildComponent,
    ParentComponent,
    GrandparentComponent,
    CardComponent,
    NgcontentComponent,
    NgCardComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    PushSpliceComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    NgClassStyleComponent,
    TempReferComponent,
    NgContainerComponent,
    DataBindingComponent,
    PageNotFoundComponent,
    NavComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    FormsModule
  ]
})
export class ModuleAModule { }
