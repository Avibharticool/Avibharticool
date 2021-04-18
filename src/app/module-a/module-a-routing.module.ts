import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModuleAComponent } from './module-a.component';
import { NavComponent } from './nav/nav.component';
import { NgCardComponent } from './ng-card/ng-card.component';
import { NgClassStyleComponent } from './ng-class-style/ng-class-style.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgifComponent } from './ngif/ngif.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { TempReferComponent } from './temp-refer/temp-refer.component';

const routes: Routes = [
  { path: '', component: ModuleAComponent,children:[
    {path:'',component:LandingPageComponent},
    {path:'card',component:CardComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'grandparent',component:GrandparentComponent},
    {path:'component-a',component:ComponentAComponent},
    {path:'component-b',component:ComponentBComponent},
    {path:'ngcard',component:NgCardComponent},
    {path:'ngif',component:NgifComponent},
    {path:'ngfor',component:NgForComponent},
    {path:'ngswitch',component:NgSwitchComponent},
    {path:'ngcontent',component:NgcontentComponent},
    {path:'pushsplice',component:PushSpliceComponent},
    {path:'ngclassstyle',component:NgClassStyleComponent},
    {path:'property-binding',component:PropertyBindingComponent},
    {path:'temp-refer',component:TempReferComponent},
    {path:'event-binding',component:EventBindingComponent },
    {path:'ng-container',component:NgContainerComponent },
    {path:'databinding',component:DataBindingComponent },
    {path:'nav',component:NavComponent},
    {path:'**',component:PageNotFoundComponent }



  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class ModuleARoutingModule { }
