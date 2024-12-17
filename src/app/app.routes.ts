
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component'; 
import { BlogComponent } from './blog/blog.component';
import { CaratComponent } from './carat/carat.component';
import { ProductComponent } from './product/product.component';
import { Best1Component } from './best1/best1.component';
import { Best2Component } from './best2/best2.component';
import { Best3Component } from './best3/best3.component';
import { BrideComponent } from './bride/bride.component';
import { ExploreComponent } from './explore/explore.component';
import { OccasionalComponent } from './occasional/occasional.component';
import { GiftComponent } from './gift/gift.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { DetailsComponent } from './details/details.component';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CouponComponent } from './coupon/coupon.component';
import { NotificationComponent } from './notification/notification.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { FAQLOginComponent } from './faq-login/faq-login.component';
import { FAQRefundComponent } from './faq-refund/faq-refund.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CancelComponent } from './cancel/cancel.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { SliderComponent } from './slider/slider.component';
import { MethodComponent } from './method/method.component';
import { ViewsComponent } from './views/views.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'carat', component: CaratComponent },
  { path: 'product', component: ProductComponent },
  { path: 'best1', component: Best1Component },
  { path: 'best2', component: Best2Component},
  { path: 'best3', component: Best3Component},
  { path: 'bride', component: BrideComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'ocassion', component: OccasionalComponent},
  { path: 'gift', component: GiftComponent},
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'cart', component: CartComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'address', component: AddressComponent},
  { path: 'card', component: CardComponent},
  { path: 'upi', component: UpiComponent},
  { path: 'gift-card', component: GiftCardComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'coupon', component: CouponComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'order', component: OrderComponent},
  { path: 'about', component: AboutComponent},
  { path: 'career', component: CareerComponent},
  { path: 'FAQ_Login', component: FAQLOginComponent},
  { path: 'FAQ_Refund', component: FAQRefundComponent},
  { path: 'Delivery', component: DeliveryComponent},
  { path: 'cancel', component: CancelComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'method', component: MethodComponent},
  { path: 'views', component:ViewsComponent},
  { path: 'customer', component:CustomerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];
