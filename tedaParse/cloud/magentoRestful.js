const q = require('../tools/request')
const { QueryBuilder } = require('mage2-webapi');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRounds = 10;



module.exports = {

  getHomeCategory: async req => {
    return await q.get('/categories').then()
  },

  getItemStock: async req => {
    let sku = req.params.sku
    return await q.get('/stockItems/' + sku)
  },

  hotItems: async req => {
    let r = await q.get('/categories/6/products').then()
    let promises = r.map(x => {
      return q.get('/products/' + x.sku)
    })
    let res = await Promise.all(promises).then()
    return res
  },

  getCategories: async req => {    // Get category list from the server
    return await q.get('/categories').then();
  },

  getProductList: async req => {    // Get products under certain category
    let id = req.params.id;
    return await q.get('/categories/' + id + '/products').then();
  },

  products: async req => {    // Get the detail info of products under the category
    let sku = req.params.sku
    return await q.get('/products/' + sku)
  },

  createCustomer: async req => {
    console.log('req' + JSON.stringify(req))

    // 创建一个Magento 账户，unionId 被加盐存起来了
    let userId = req.user.id
    let unionId = req.params.unionId
    let wxProfile = req.params.wxProfile

    console.log(unionId)

    let password = uuidv4()

    let isEmailOk = await q.post('/customers/isEmailAvailable', {
      customerEmail: `${unionId}@qq.com`
    }).then()

    console.log('isEmailOk' + JSON.stringify(isEmailOk))

    if (!isEmailOk) {
      return
    }

    if (unionId) {
      let r = await q({
        method: 'post',
        url: '/customers',
        data: {
          customer: {
            "email": `${unionId}@qq.com`,
            "firstname": `${wxProfile.nickName}`,
            "lastname": `${wxProfile.nickName}`,
            "storeId": 1,
            "websiteId": 1
          },
          password: password
        }
      })
      return r
    }

  },


  addOrder: async req => {
    let p = req.params


    let res = await q.post('/carts/mine',{
      param:{
        'customerId':p.customerId
      }
    }).then()
    console.log('r' + JSON.stringify(res))
    return


    p = {
      "entity": {
        "adjustment_negative": 0,
        "adjustment_positive": 0,
        "applied_rule_ids": "string",
        "base_adjustment_negative": 0,
        "base_adjustment_positive": 0,
        "base_currency_code": "string",
        "base_discount_amount": 0,
        "base_discount_canceled": 0,
        "base_discount_invoiced": 0,
        "base_discount_refunded": 0,
        "base_grand_total": 0,
        "base_discount_tax_compensation_amount": 0,
        "base_discount_tax_compensation_invoiced": 0,
        "base_discount_tax_compensation_refunded": 0,
        "base_shipping_amount": 0,
        "base_shipping_canceled": 0,
        "base_shipping_discount_amount": 0,
        "base_shipping_discount_tax_compensation_amnt": 0,
        "base_shipping_incl_tax": 0,
        "base_shipping_invoiced": 0,
        "base_shipping_refunded": 0,
        "base_shipping_tax_amount": 0,
        "base_shipping_tax_refunded": 0,
        "base_subtotal": 0,
        "base_subtotal_canceled": 0,
        "base_subtotal_incl_tax": 0,
        "base_subtotal_invoiced": 0,
        "base_subtotal_refunded": 0,
        "base_tax_amount": 0,
        "base_tax_canceled": 0,
        "base_tax_invoiced": 0,
        "base_tax_refunded": 0,
        "base_total_canceled": 0,
        "base_total_due": 0,
        "base_total_invoiced": 0,
        "base_total_invoiced_cost": 0,
        "base_total_offline_refunded": 0,
        "base_total_online_refunded": 0,
        "base_total_paid": 0,
        "base_total_qty_ordered": 0,
        "base_total_refunded": 0,
        "base_to_global_rate": 0,
        "base_to_order_rate": 0,
        "billing_address_id": 0,
        "can_ship_partially": 0,
        "can_ship_partially_item": 0,
        "coupon_code": "string",
        "created_at": "string",
        "customer_dob": "string",
        "customer_email": "string",
        "customer_firstname": "string",
        "customer_gender": 0,
        "customer_group_id": 0,
        "customer_id": 0,
        "customer_is_guest": 0,
        "customer_lastname": "string",
        "customer_middlename": "string",
        "customer_note": "string",
        "customer_note_notify": 0,
        "customer_prefix": "string",
        "customer_suffix": "string",
        "customer_taxvat": "string",
        "discount_amount": 0,
        "discount_canceled": 0,
        "discount_description": "string",
        "discount_invoiced": 0,
        "discount_refunded": 0,
        "edit_increment": 0,
        "email_sent": 0,
        "entity_id": 0,
        "ext_customer_id": "string",
        "ext_order_id": "string",
        "forced_shipment_with_invoice": 0,
        "global_currency_code": "string",
        "grand_total": 0,
        "discount_tax_compensation_amount": 0,
        "discount_tax_compensation_invoiced": 0,
        "discount_tax_compensation_refunded": 0,
        "hold_before_state": "string",
        "hold_before_status": "string",
        "increment_id": "string",
        "is_virtual": 0,
        "order_currency_code": "string",
        "original_increment_id": "string",
        "payment_authorization_amount": 0,
        "payment_auth_expiration": 0,
        "protect_code": "string",
        "quote_address_id": 0,
        "quote_id": 0,
        "relation_child_id": "string",
        "relation_child_real_id": "string",
        "relation_parent_id": "string",
        "relation_parent_real_id": "string",
        "remote_ip": "string",
        "shipping_amount": 0,
        "shipping_canceled": 0,
        "shipping_description": "string",
        "shipping_discount_amount": 0,
        "shipping_discount_tax_compensation_amount": 0,
        "shipping_incl_tax": 0,
        "shipping_invoiced": 0,
        "shipping_refunded": 0,
        "shipping_tax_amount": 0,
        "shipping_tax_refunded": 0,
        "state": "string",
        "status": "string",
        "store_currency_code": "string",
        "store_id": 0,
        "store_name": "string",
        "store_to_base_rate": 0,
        "store_to_order_rate": 0,
        "subtotal": 0,
        "subtotal_canceled": 0,
        "subtotal_incl_tax": 0,
        "subtotal_invoiced": 0,
        "subtotal_refunded": 0,
        "tax_amount": 0,
        "tax_canceled": 0,
        "tax_invoiced": 0,
        "tax_refunded": 0,
        "total_canceled": 0,
        "total_due": 0,
        "total_invoiced": 0,
        "total_item_count": 0,
        "total_offline_refunded": 0,
        "total_online_refunded": 0,
        "total_paid": 0,
        "total_qty_ordered": 0,
        "total_refunded": 0,
        "updated_at": "string",
        "weight": 0,
        "x_forwarded_for": "string",
        "items": [
          {
            "additional_data": "string",
            "amount_refunded": 0,
            "applied_rule_ids": "string",
            "base_amount_refunded": 0,
            "base_cost": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_refunded": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_discount_tax_compensation_invoiced": 0,
            "base_discount_tax_compensation_refunded": 0,
            "base_original_price": 0,
            "base_price": 0,
            "base_price_incl_tax": 0,
            "base_row_invoiced": 0,
            "base_row_total": 0,
            "base_row_total_incl_tax": 0,
            "base_tax_amount": 0,
            "base_tax_before_discount": 0,
            "base_tax_invoiced": 0,
            "base_tax_refunded": 0,
            "base_weee_tax_applied_amount": 0,
            "base_weee_tax_applied_row_amnt": 0,
            "base_weee_tax_disposition": 0,
            "base_weee_tax_row_disposition": 0,
            "created_at": "string",
            "description": "string",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "discount_refunded": 0,
            "event_id": 0,
            "ext_order_item_id": "string",
            "free_shipping": 0,
            "gw_base_price": 0,
            "gw_base_price_invoiced": 0,
            "gw_base_price_refunded": 0,
            "gw_base_tax_amount": 0,
            "gw_base_tax_amount_invoiced": 0,
            "gw_base_tax_amount_refunded": 0,
            "gw_id": 0,
            "gw_price": 0,
            "gw_price_invoiced": 0,
            "gw_price_refunded": 0,
            "gw_tax_amount": 0,
            "gw_tax_amount_invoiced": 0,
            "gw_tax_amount_refunded": 0,
            "discount_tax_compensation_amount": 0,
            "discount_tax_compensation_canceled": 0,
            "discount_tax_compensation_invoiced": 0,
            "discount_tax_compensation_refunded": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 0,
            "locked_do_invoice": 0,
            "locked_do_ship": 0,
            "name": "string",
            "no_discount": 0,
            "order_id": 0,
            "original_price": 0,
            "parent_item_id": 0,
            "price": 0,
            "price_incl_tax": 0,
            "product_id": 0,
            "product_type": "string",
            "qty_backordered": 0,
            "qty_canceled": 0,
            "qty_invoiced": 0,
            "qty_ordered": 0,
            "qty_refunded": 0,
            "qty_returned": 0,
            "qty_shipped": 0,
            "quote_item_id": 0,
            "row_invoiced": 0,
            "row_total": 0,
            "row_total_incl_tax": 0,
            "row_weight": 0,
            "sku": "string",
            "store_id": 0,
            "tax_amount": 0,
            "tax_before_discount": 0,
            "tax_canceled": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "tax_refunded": 0,
            "updated_at": "string",
            "weee_tax_applied": "string",
            "weee_tax_applied_amount": 0,
            "weee_tax_applied_row_amount": 0,
            "weee_tax_disposition": 0,
            "weee_tax_row_disposition": 0,
            "weight": 0,
            "parent_item": {},
            "product_option": {
              "extension_attributes": {
                "custom_options": [
                  {
                    "option_id": "string",
                    "option_value": "string",
                    "extension_attributes": {
                      "file_info": {
                        "base64_encoded_data": "string",
                        "type": "string",
                        "name": "string"
                      }
                    }
                  }
                ],
                "bundle_options": [
                  {
                    "option_id": 0,
                    "option_qty": 0,
                    "option_selections": [
                      0
                    ],
                    "extension_attributes": {}
                  }
                ],
                "configurable_item_options": [
                  {
                    "option_id": "string",
                    "option_value": 0,
                    "extension_attributes": {}
                  }
                ],
                "downloadable_option": {
                  "downloadable_links": [
                    0
                  ]
                },
                "giftcard_item_option": {
                  "giftcard_amount": "string",
                  "custom_giftcard_amount": 0,
                  "giftcard_sender_name": "string",
                  "giftcard_recipient_name": "string",
                  "giftcard_sender_email": "string",
                  "giftcard_recipient_email": "string",
                  "giftcard_message": "string",
                  "extension_attributes": {}
                }
              }
            },
            "extension_attributes": {
              "gift_message": {
                "gift_message_id": 0,
                "customer_id": 0,
                "sender": "string",
                "recipient": "string",
                "message": "string",
                "extension_attributes": {
                  "entity_id": "string",
                  "entity_type": "string",
                  "wrapping_id": 0,
                  "wrapping_allow_gift_receipt": true,
                  "wrapping_add_printed_card": true
                }
              },
              "gw_id": "string",
              "gw_base_price": "string",
              "gw_price": "string",
              "gw_base_tax_amount": "string",
              "gw_tax_amount": "string",
              "gw_base_price_invoiced": "string",
              "gw_price_invoiced": "string",
              "gw_base_tax_amount_invoiced": "string",
              "gw_tax_amount_invoiced": "string",
              "gw_base_price_refunded": "string",
              "gw_price_refunded": "string",
              "gw_base_tax_amount_refunded": "string",
              "gw_tax_amount_refunded": "string",
              "vertex_tax_codes": [
                "string"
              ],
              "invoice_text_codes": [
                "string"
              ],
              "tax_codes": [
                "string"
              ]
            }
          }
        ],
        "billing_address": {
          "address_type": "string",
          "city": "string",
          "company": "string",
          "country_id": "string",
          "customer_address_id": 0,
          "customer_id": 0,
          "email": "string",
          "entity_id": 0,
          "fax": "string",
          "firstname": "string",
          "lastname": "string",
          "middlename": "string",
          "parent_id": 0,
          "postcode": "string",
          "prefix": "string",
          "region": "string",
          "region_code": "string",
          "region_id": 0,
          "street": [
            "string"
          ],
          "suffix": "string",
          "telephone": "string",
          "vat_id": "string",
          "vat_is_valid": 0,
          "vat_request_date": "string",
          "vat_request_id": "string",
          "vat_request_success": 0,
          "extension_attributes": {
            "checkout_fields": [
              {
                "attribute_code": "string",
                "value": "string"
              }
            ]
          }
        },
        "payment": {
          "account_status": "string",
          "additional_data": "string",
          "additional_information": [
            "string"
          ],
          "address_status": "string",
          "amount_authorized": 0,
          "amount_canceled": 0,
          "amount_ordered": 0,
          "amount_paid": 0,
          "amount_refunded": 0,
          "anet_trans_method": "string",
          "base_amount_authorized": 0,
          "base_amount_canceled": 0,
          "base_amount_ordered": 0,
          "base_amount_paid": 0,
          "base_amount_paid_online": 0,
          "base_amount_refunded": 0,
          "base_amount_refunded_online": 0,
          "base_shipping_amount": 0,
          "base_shipping_captured": 0,
          "base_shipping_refunded": 0,
          "cc_approval": "string",
          "cc_avs_status": "string",
          "cc_cid_status": "string",
          "cc_debug_request_body": "string",
          "cc_debug_response_body": "string",
          "cc_debug_response_serialized": "string",
          "cc_exp_month": "string",
          "cc_exp_year": "string",
          "cc_last4": "string",
          "cc_number_enc": "string",
          "cc_owner": "string",
          "cc_secure_verify": "string",
          "cc_ss_issue": "string",
          "cc_ss_start_month": "string",
          "cc_ss_start_year": "string",
          "cc_status": "string",
          "cc_status_description": "string",
          "cc_trans_id": "string",
          "cc_type": "string",
          "echeck_account_name": "string",
          "echeck_account_type": "string",
          "echeck_bank_name": "string",
          "echeck_routing_number": "string",
          "echeck_type": "string",
          "entity_id": 0,
          "last_trans_id": "string",
          "method": "string",
          "parent_id": 0,
          "po_number": "string",
          "protection_eligibility": "string",
          "quote_payment_id": 0,
          "shipping_amount": 0,
          "shipping_captured": 0,
          "shipping_refunded": 0,
          "extension_attributes": {
            "vault_payment_token": {
              "entity_id": 0,
              "customer_id": 0,
              "public_hash": "string",
              "payment_method_code": "string",
              "type": "string",
              "created_at": "string",
              "expires_at": "string",
              "gateway_token": "string",
              "token_details": "string",
              "is_active": true,
              "is_visible": true
            }
          }
        },
        "status_histories": [
          {
            "comment": "string",
            "created_at": "string",
            "entity_id": 0,
            "entity_name": "string",
            "is_customer_notified": 0,
            "is_visible_on_front": 0,
            "parent_id": 0,
            "status": "string",
            "extension_attributes": {}
          }
        ],
        "extension_attributes": {
          "shipping_assignments": [
            {
              "shipping": {
                "address": {
                  "address_type": "string",
                  "city": "string",
                  "company": "string",
                  "country_id": "string",
                  "customer_address_id": 0,
                  "customer_id": 0,
                  "email": "string",
                  "entity_id": 0,
                  "fax": "string",
                  "firstname": "string",
                  "lastname": "string",
                  "middlename": "string",
                  "parent_id": 0,
                  "postcode": "string",
                  "prefix": "string",
                  "region": "string",
                  "region_code": "string",
                  "region_id": 0,
                  "street": [
                    "string"
                  ],
                  "suffix": "string",
                  "telephone": "string",
                  "vat_id": "string",
                  "vat_is_valid": 0,
                  "vat_request_date": "string",
                  "vat_request_id": "string",
                  "vat_request_success": 0,
                  "extension_attributes": {
                    "checkout_fields": [
                      {
                        "attribute_code": "string",
                        "value": "string"
                      }
                    ]
                  }
                },
                "method": "string",
                "total": {
                  "base_shipping_amount": 0,
                  "base_shipping_canceled": 0,
                  "base_shipping_discount_amount": 0,
                  "base_shipping_discount_tax_compensation_amnt": 0,
                  "base_shipping_incl_tax": 0,
                  "base_shipping_invoiced": 0,
                  "base_shipping_refunded": 0,
                  "base_shipping_tax_amount": 0,
                  "base_shipping_tax_refunded": 0,
                  "shipping_amount": 0,
                  "shipping_canceled": 0,
                  "shipping_discount_amount": 0,
                  "shipping_discount_tax_compensation_amount": 0,
                  "shipping_incl_tax": 0,
                  "shipping_invoiced": 0,
                  "shipping_refunded": 0,
                  "shipping_tax_amount": 0,
                  "shipping_tax_refunded": 0,
                  "extension_attributes": {}
                },
                "extension_attributes": {
                  "ext_order_id": "string",
                  "shipping_experience": {
                    "label": "string",
                    "code": "string",
                    "cost": 0
                  },
                  "collection_point": {
                    "recipient_address_id": 0,
                    "collection_point_id": "string",
                    "name": "string",
                    "country": "string",
                    "region": "string",
                    "postcode": "string",
                    "city": "string",
                    "street": [
                      "string"
                    ]
                  }
                }
              },
              "items": [
                {
                  "additional_data": "string",
                  "amount_refunded": 0,
                  "applied_rule_ids": "string",
                  "base_amount_refunded": 0,
                  "base_cost": 0,
                  "base_discount_amount": 0,
                  "base_discount_invoiced": 0,
                  "base_discount_refunded": 0,
                  "base_discount_tax_compensation_amount": 0,
                  "base_discount_tax_compensation_invoiced": 0,
                  "base_discount_tax_compensation_refunded": 0,
                  "base_original_price": 0,
                  "base_price": 0,
                  "base_price_incl_tax": 0,
                  "base_row_invoiced": 0,
                  "base_row_total": 0,
                  "base_row_total_incl_tax": 0,
                  "base_tax_amount": 0,
                  "base_tax_before_discount": 0,
                  "base_tax_invoiced": 0,
                  "base_tax_refunded": 0,
                  "base_weee_tax_applied_amount": 0,
                  "base_weee_tax_applied_row_amnt": 0,
                  "base_weee_tax_disposition": 0,
                  "base_weee_tax_row_disposition": 0,
                  "created_at": "string",
                  "description": "string",
                  "discount_amount": 0,
                  "discount_invoiced": 0,
                  "discount_percent": 0,
                  "discount_refunded": 0,
                  "event_id": 0,
                  "ext_order_item_id": "string",
                  "free_shipping": 0,
                  "gw_base_price": 0,
                  "gw_base_price_invoiced": 0,
                  "gw_base_price_refunded": 0,
                  "gw_base_tax_amount": 0,
                  "gw_base_tax_amount_invoiced": 0,
                  "gw_base_tax_amount_refunded": 0,
                  "gw_id": 0,
                  "gw_price": 0,
                  "gw_price_invoiced": 0,
                  "gw_price_refunded": 0,
                  "gw_tax_amount": 0,
                  "gw_tax_amount_invoiced": 0,
                  "gw_tax_amount_refunded": 0,
                  "discount_tax_compensation_amount": 0,
                  "discount_tax_compensation_canceled": 0,
                  "discount_tax_compensation_invoiced": 0,
                  "discount_tax_compensation_refunded": 0,
                  "is_qty_decimal": 0,
                  "is_virtual": 0,
                  "item_id": 0,
                  "locked_do_invoice": 0,
                  "locked_do_ship": 0,
                  "name": "string",
                  "no_discount": 0,
                  "order_id": 0,
                  "original_price": 0,
                  "parent_item_id": 0,
                  "price": 0,
                  "price_incl_tax": 0,
                  "product_id": 0,
                  "product_type": "string",
                  "qty_backordered": 0,
                  "qty_canceled": 0,
                  "qty_invoiced": 0,
                  "qty_ordered": 0,
                  "qty_refunded": 0,
                  "qty_returned": 0,
                  "qty_shipped": 0,
                  "quote_item_id": 0,
                  "row_invoiced": 0,
                  "row_total": 0,
                  "row_total_incl_tax": 0,
                  "row_weight": 0,
                  "sku": "string",
                  "store_id": 0,
                  "tax_amount": 0,
                  "tax_before_discount": 0,
                  "tax_canceled": 0,
                  "tax_invoiced": 0,
                  "tax_percent": 0,
                  "tax_refunded": 0,
                  "updated_at": "string",
                  "weee_tax_applied": "string",
                  "weee_tax_applied_amount": 0,
                  "weee_tax_applied_row_amount": 0,
                  "weee_tax_disposition": 0,
                  "weee_tax_row_disposition": 0,
                  "weight": 0,
                  "parent_item": {},
                  "product_option": {
                    "extension_attributes": {
                      "custom_options": [
                        {
                          "option_id": "string",
                          "option_value": "string",
                          "extension_attributes": {
                            "file_info": {
                              "base64_encoded_data": "string",
                              "type": "string",
                              "name": "string"
                            }
                          }
                        }
                      ],
                      "bundle_options": [
                        {
                          "option_id": 0,
                          "option_qty": 0,
                          "option_selections": [
                            0
                          ],
                          "extension_attributes": {}
                        }
                      ],
                      "configurable_item_options": [
                        {
                          "option_id": "string",
                          "option_value": 0,
                          "extension_attributes": {}
                        }
                      ],
                      "downloadable_option": {
                        "downloadable_links": [
                          0
                        ]
                      },
                      "giftcard_item_option": {
                        "giftcard_amount": "string",
                        "custom_giftcard_amount": 0,
                        "giftcard_sender_name": "string",
                        "giftcard_recipient_name": "string",
                        "giftcard_sender_email": "string",
                        "giftcard_recipient_email": "string",
                        "giftcard_message": "string",
                        "extension_attributes": {}
                      }
                    }
                  },
                  "extension_attributes": {
                    "gift_message": {
                      "gift_message_id": 0,
                      "customer_id": 0,
                      "sender": "string",
                      "recipient": "string",
                      "message": "string",
                      "extension_attributes": {
                        "entity_id": "string",
                        "entity_type": "string",
                        "wrapping_id": 0,
                        "wrapping_allow_gift_receipt": true,
                        "wrapping_add_printed_card": true
                      }
                    },
                    "gw_id": "string",
                    "gw_base_price": "string",
                    "gw_price": "string",
                    "gw_base_tax_amount": "string",
                    "gw_tax_amount": "string",
                    "gw_base_price_invoiced": "string",
                    "gw_price_invoiced": "string",
                    "gw_base_tax_amount_invoiced": "string",
                    "gw_tax_amount_invoiced": "string",
                    "gw_base_price_refunded": "string",
                    "gw_price_refunded": "string",
                    "gw_base_tax_amount_refunded": "string",
                    "gw_tax_amount_refunded": "string",
                    "vertex_tax_codes": [
                      "string"
                    ],
                    "invoice_text_codes": [
                      "string"
                    ],
                    "tax_codes": [
                      "string"
                    ]
                  }
                }
              ],
              "stock_id": 0,
              "extension_attributes": {}
            }
          ],
          "payment_additional_info": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "company_order_attributes": {
            "order_id": 0,
            "company_id": 0,
            "company_name": "string",
            "extension_attributes": {}
          },
          "applied_taxes": [
            {
              "code": "string",
              "title": "string",
              "percent": 0,
              "amount": 0,
              "base_amount": 0,
              "extension_attributes": {
                "rates": [
                  {
                    "code": "string",
                    "title": "string",
                    "percent": 0,
                    "extension_attributes": {}
                  }
                ]
              }
            }
          ],
          "item_applied_taxes": [
            {
              "type": "string",
              "item_id": 0,
              "associated_item_id": 0,
              "applied_taxes": [
                {
                  "code": "string",
                  "title": "string",
                  "percent": 0,
                  "amount": 0,
                  "base_amount": 0,
                  "extension_attributes": {
                    "rates": [
                      {
                        "code": "string",
                        "title": "string",
                        "percent": 0,
                        "extension_attributes": {}
                      }
                    ]
                  }
                }
              ],
              "extension_attributes": {}
            }
          ],
          "converting_from_quote": true,
          "base_customer_balance_amount": 0,
          "customer_balance_amount": 0,
          "base_customer_balance_invoiced": 0,
          "customer_balance_invoiced": 0,
          "base_customer_balance_refunded": 0,
          "customer_balance_refunded": 0,
          "base_customer_balance_total_refunded": 0,
          "customer_balance_total_refunded": 0,
          "gift_cards": [
            {
              "id": 0,
              "code": "string",
              "amount": 0,
              "base_amount": 0
            }
          ],
          "base_gift_cards_amount": 0,
          "gift_cards_amount": 0,
          "base_gift_cards_invoiced": 0,
          "gift_cards_invoiced": 0,
          "base_gift_cards_refunded": 0,
          "gift_cards_refunded": 0,
          "gift_message": {
            "gift_message_id": 0,
            "customer_id": 0,
            "sender": "string",
            "recipient": "string",
            "message": "string",
            "extension_attributes": {
              "entity_id": "string",
              "entity_type": "string",
              "wrapping_id": 0,
              "wrapping_allow_gift_receipt": true,
              "wrapping_add_printed_card": true
            }
          },
          "gw_id": "string",
          "gw_allow_gift_receipt": "string",
          "gw_add_card": "string",
          "gw_base_price": "string",
          "gw_price": "string",
          "gw_items_base_price": "string",
          "gw_items_price": "string",
          "gw_card_base_price": "string",
          "gw_card_price": "string",
          "gw_base_tax_amount": "string",
          "gw_tax_amount": "string",
          "gw_items_base_tax_amount": "string",
          "gw_items_tax_amount": "string",
          "gw_card_base_tax_amount": "string",
          "gw_card_tax_amount": "string",
          "gw_base_price_incl_tax": "string",
          "gw_price_incl_tax": "string",
          "gw_items_base_price_incl_tax": "string",
          "gw_items_price_incl_tax": "string",
          "gw_card_base_price_incl_tax": "string",
          "gw_card_price_incl_tax": "string",
          "gw_base_price_invoiced": "string",
          "gw_price_invoiced": "string",
          "gw_items_base_price_invoiced": "string",
          "gw_items_price_invoiced": "string",
          "gw_card_base_price_invoiced": "string",
          "gw_card_price_invoiced": "string",
          "gw_base_tax_amount_invoiced": "string",
          "gw_tax_amount_invoiced": "string",
          "gw_items_base_tax_invoiced": "string",
          "gw_items_tax_invoiced": "string",
          "gw_card_base_tax_invoiced": "string",
          "gw_card_tax_invoiced": "string",
          "gw_base_price_refunded": "string",
          "gw_price_refunded": "string",
          "gw_items_base_price_refunded": "string",
          "gw_items_price_refunded": "string",
          "gw_card_base_price_refunded": "string",
          "gw_card_price_refunded": "string",
          "gw_base_tax_amount_refunded": "string",
          "gw_tax_amount_refunded": "string",
          "gw_items_base_tax_refunded": "string",
          "gw_items_tax_refunded": "string",
          "gw_card_base_tax_refunded": "string",
          "gw_card_tax_refunded": "string",
          "reward_points_balance": 0,
          "reward_currency_amount": 0,
          "base_reward_currency_amount": 0,
          "amazon_order_reference_id": {
            "amazon_order_reference_id": "string",
            "order_id": 0
          }
        }
      }
    }

    let r = await q({
      method: 'post',
      url: '/orders/create',
      data: p
    })

    return r
  },

  orders: async req => {

    let builder = new QueryBuilder();
    builder.addFilterGroup([
      {
        field: "customer_email",
        value: "woooms@qq.com"
      }
    ]
    )

    let r = await q({
      method: 'get',
      url: '/orders? ' + builder.getQuery(),
    })

    console.log(typeof r)

    return r
  },


  // Make payment
  pay: async req => {
    let orderId = req.params.orderId;



  }
}