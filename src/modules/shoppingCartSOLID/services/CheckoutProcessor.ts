import { CheckoutProcessorInterface } from "../interfaces/CheckoutProcessorInterface";

export class CheckoutProcessor implements CheckoutProcessorInterface {
  processCheckout(total: number): void {
    console.log(`Processing payment for total: ${total}`);
  }
}
