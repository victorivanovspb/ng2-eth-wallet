import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'wallet',
    styleUrls: ['./wallet.css'],
    templateUrl: './wallet.html'
})
export class WalletComponent implements OnInit {
    @ViewChild('wallet') wallet: ElementRef;

    ngOnInit() {
        console.log('Wallet loaded.');
        // this.loadScript('./web3-1.js');
    }
    public btnWallet() {
        let wal = this.wallet.nativeElement;
        wal.className = (wal.className === 'odv odv_opened') ? 'odv odv_closed' : 'odv odv_opened';
    }
    /*public loadScript(url) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }*/
}
