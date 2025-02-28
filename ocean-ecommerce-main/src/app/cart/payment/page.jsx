"use client";
import Navbar from "@/Components/Navbar/Navbar";
import "./page.css";
import React from "react";
import { useCart } from "@/Context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Payment() {
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart();

  const calculateSubtotal = (items) =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const deliveryFee = 20500;
  const subtotal = calculateSubtotal(cartItems);
  const total = subtotal + deliveryFee;
  return (
    <div className="payment__container">
      <div className="payment__container-navbar">
        <Navbar />
      </div>
      <div className="payment__container-body">
        <div className="payment__container-body_left">
          <div className="payment__container-body_left-section1">
            <h1>Payment</h1>
            <p>All transactions are secure and encrypted.</p>
          </div>
          <div className="payment__container-body_left-section2">
            <div className="payment__container-body_left-section3">
              <div className="payment__container-body_left-section3_top">
                <h1>Billing Details</h1>
              </div>
              <div className="payment__container-body_left-section3_bottom">
                <div className="section3_bottom-input1">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="section3_bottom-input2">
                  <input type="text" placeholder="Address" />
                </div>
                <div className="section3_bottom-input3">
                  <input type="text" placeholder="Town/City" />
                  <input type="text" placeholder="Town/City" />
                  <input type="text" placeholder="Town/City" />
                </div>
                <div className="section3_bottom-input1">
                  <input type="number" placeholder="Phone Number" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="section3_bottom-input4">
                  <input type="checkbox" id="rememberMe" />
                  <p for="rememberMe">Remember me</p>
                </div>
              </div>
            </div>
            <div className="payment__container-body_left-section4">
              <button>BACK TO CART</button>
            </div>
          </div>
        </div>
        <div className="part__container-body_right">
          <h1>CART TOTALS</h1>
          <div className="payment__container-body_right-totals">
            <div className="payment__container-body_right-totals_section1">
              <h1>SUBTOTAL</h1>
              <h3>N{Number(subtotal).toLocaleString()}</h3>
            </div>
            <div className="payment__container-body_right-totals_section2">
              <div className="payment__container-delivery">
                <h1>DELIVERY</h1>
                <p>Delivery fees:</p>
                <p>
                  Delivery Location: <span>Abuja</span>
                </p>
              </div>
              <h3>N{Number(deliveryFee).toLocaleString()}</h3>
            </div>
          </div>
          <div className="payment__container-body_right-checkout">
            <h1>TOTAL</h1>
            <h3>N{Number(total).toLocaleString()}</h3>
          </div>
          <button onClick={() => router.push("/cart/payment")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
