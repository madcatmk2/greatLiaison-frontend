var _ = require('underscore');
var React = require('react');
var GllAPIUtils = require('../utils/GllAPIUtils');
var GllAppUtils = require('../utils/GllAppUtils');

/*
 * TODO for this class: input field validation, layout the buttons and
 * input fields as subcomponents
 */

var Checkout = React.createClass({

  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: 'Hong Kong',
      paymentMethod: ''
    }
  },

  render: function() {
    if (this.props.cart.length === 0) {
      return (
        <div>
          <p>你的購物車沒有物品</p>
          <div onClick={this._onReturnToCart} style={
            {
              backgroundColor: '#999',
              color: '#fff',
              cursor: 'hand',
              width: '100px',
              height: '30px',
              marginTop: '20px'
            }
          }>
            返回購物車
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2>結帳</h2>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='姓氏'
            onChange={this._onChangeInputField}
          />
          <input
            type='text'
            name='firstName'
            placeholder='名字'
            onChange={this._onChangeInputField}
          />
          <p>
            <input
              type='text'
              name='phone'
              placeholder='電話'
              onChange={this._onChangeInputField}
            />
          </p>
          <p>
            <input
              type='text'
              name='email'
              placeholder='電郵地址'
              onChange={this._onChangeInputField}
            />
          </p>
          <p>地址:</p>
          <input
            type='text'
            name='address1'
            onChange={this._onChangeInputField}
          /><br/>
          <input
            type='text'
            name='address2'
            onChange={this._onChangeInputField}
          />
        </div>
        <div>
          <p>付款方法:</p>
          <form>
            <input
              type='radio'
              id='paymentPaypal'
              name='paymentMethod'
              value='paypal'
              onChange={this._onChangeInputField}
            />
            <label htmlFor='paymentPaypal'>
              <img src="https://www.paypal.com/en_US/i/logo/PayPal_mark_37x23.gif"/>
            </label>
            <input
              type='radio'
              id='paymentCash'
              name='paymentMethod'
              value='cash'
              onChange={this._onChangeInputField}
            />
              <label htmlFor='paymentCash'>
                貨到付款(現金)
              </label>
          </form>
        </div>
        <div onClick={this._onPlaceOrder} style={
          {
            backgroundColor: '#0c0',
            color: '#fff',
            cursor: 'hand',
            width: '100px',
            height: '30px',
            marginTop: '10px'
          }
        }>
          確認訂單
        </div>
        <div onClick={this._onReturnToCart} style={
          {
            backgroundColor: '#999',
            color: '#fff',
            cursor: 'hand',
            width: '100px',
            height: '30px',
            marginTop: '20px'
          }
        }>
          返回購物車
        </div>
      </div>
    );
  },

  /*
   * Event handlers
   */
  _onChangeInputField: function(event) {
    var changeState = {};
    changeState[event.target.name] = event.target.value;
    this.setState(changeState);
  },

  _onPlaceOrder: function() {
    GllAPIUtils.completeCheckout(_.extend(this.state, {
      subTotal: this.props.cartSubTotal
    }));
  },

  _onReturnToCart: function() {
    GllAppUtils.returnToCart();
  }

});

module.exports = Checkout;
