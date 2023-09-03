import { CanActivateFn} from '@angular/router';
import { SellerService } from './services/seller.service';
import { ɵɵinject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(SellerService);
  return authService.isSellerLoggedIn;

  };
  