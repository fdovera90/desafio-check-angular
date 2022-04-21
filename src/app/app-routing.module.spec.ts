import { NotFoundComponent } from "./404/not-found.component";
import { routes } from "./app-routing.module";
import { HistoryComponent } from "./pages/history/history.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewDestinationAccountComponent } from "./pages/new-destination-account/new-destination-account.component";
import { TransferComponent } from "./pages/transfer/transfer.component";

describe('Main Routes', () => {

    it('The /nuevo-destinatario path should exist', () => {

        expect( routes ).toContain({
            path: 'nuevo-destinatario',
            component: NewDestinationAccountComponent
        });
    });

    it('The /transferir path should exist', () => {

        expect( routes ).toContain({
            path: 'transferir',
            component: TransferComponent
        });
    });

    it('The /historial path should exist', () => {

        expect( routes ).toContain({
            path: 'historial',
            component: HistoryComponent
        });

    });

    it('The /404 path should exist', () => {

        expect( routes ).toContain({
            path: '404',
            component: NotFoundComponent
        });
        
    });

    it('The / path should exist', () => {

        expect( routes ).toContain({
            path: '',
            component: HomeComponent
        });
        
    });

    it('The /** path should exist', () => {

        expect( routes ).toContain({
            path: '**',
            redirectTo: '404'
        });
        
    });

});