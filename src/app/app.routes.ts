import { Routes } from '@angular/router';
import { TextInterpolation } from './components/text-interpolation/text-interpolation';
import { Bindings } from './components/bindings/bindings';
import { ControlFlow } from './components/control-flow/control-flow';
import { ExosBindings } from './components/exos-bindings/exos-bindings';
import { NotFound } from './components/layout/not-found/not-found';
import { Welcome } from './components/layout/welcome/welcome';
import { Signals } from './components/signals/signals';
import { ExosSignals } from './components/exos-signals/exos-signals';
import { ProduitList } from './components/produit-list/produit-list';
import { BureauVoteList } from './components/bureau-vote-list/bureau-vote-list';
import { ExosIo } from './components/exos-io/exos-io';
import { PipesExemples } from './components/pipes-exemples/pipes-exemples';
import { ProduitTable } from './components/produit-table/produit-table';
import { Es01 } from './components/exos-signals/es01/es01';
import { Es02 } from './components/exos-signals/es02/es02';
import { Es03 } from './components/exos-signals/es03/es03';
import { Es04 } from './components/exos-signals/es04/es04';
import { Es05 } from './components/exos-signals/es05/es05';
import { Es06 } from './components/exos-signals/es06/es06';
import { Es07 } from './components/exos-signals/es07/es07';
import { Es08 } from './components/exos-signals/es08/es08';
import { Es09 } from './components/exos-signals/es09/es09';
import { Es10 } from './components/exos-signals/es10/es10';
import { preferenceGuard } from './guards/preference-guard';
import { ExosMat } from './components/exos-mat/exos-mat';
import { Em08 } from './components/exos-mat/em08/em08';
import { ProduitTableHttp } from './components/produit-table-http/produit-table-http';
import { ProduitAddFormSignal } from './components/produit-add-form-signal/produit-add-form-signal';

export const routes: Routes = [
    { path: 'welcome', component: Welcome},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'textinterpolation', component: TextInterpolation, canActivate: [preferenceGuard]},
    { path: 'bindings', component: Bindings},
    { path: 'controlflow', component: ControlFlow},
    { path: 'exosbindings', component: ExosBindings},
    { path: 'signals', component: Signals},
    { path: 'exossignals',
        component: ExosSignals,
        children: [
            { path : 'es01', component: Es01},
            { path : 'es02', component: Es02},
            { path : 'es03', component: Es03},
            { path : 'es04', component: Es04},
            { path : 'es05', component: Es05},
            { path : 'es06', component: Es06},
            { path : 'es07', component: Es07},
            { path : 'es08', component: Es08},
            { path : 'es09', component: Es09},
            { path : 'es10', component: Es10},
            { path: '', redirectTo: 'es01', pathMatch: 'full'},
        ]
    },
    { path: 'produits', component: ProduitList},
    { path: 'votation', component: BureauVoteList},
    { path: 'exosio', component: ExosIo},
    { path: 'pipes', component: PipesExemples},
    { path: 'produitsv2', component: ProduitTable},
    { path: 'produitshttp', component: ProduitTableHttp},
    { path: 'exosmat', component: Em08},
    { path: 'signalform', component: ProduitAddFormSignal},
    { path: '**', component: NotFound}
];
