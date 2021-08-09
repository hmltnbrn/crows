window.onload = () => {
  const pageId = window.location.pathname.indexOf("index") >= 0 ? "home" : 'other';

  const historyId = localStorage.getItem("history_id") || "";

  let memberId = localStorage.getItem("member_id");
  if(!memberId) {
    memberId = Date.now().toString();
    localStorage.setItem("member_id", memberId);
  }

  const cart = Object.values(JSON.parse(localStorage.getItem("cart")) || {});

  const data = {
    site_name: "BLACKCROW",
    page_id: pageId,
    site_country: "US",
    site_language: "EN",
    site_currency: "USD",
    page_title: document.getElementsByTagName('title')[0].innerHTML,
    page_url: window.location.href,
    page_referrer_url: document.referrer,
    history_id: historyId,
    device_info: navigator.userAgent,
    visitor_ip_address: "127.0.0.1",
    visitor_id: memberId,
    member_id: memberId,
    is_logged_in_user: false,
    user_has_subscription: false,
    store_id: "12345",
    cart: cart,
    shipping_method: "Bird",
    shipping_price: 10000000,
    zip_code: "11103",
    event_id: Date.now().toString(),
  };

  fetch('https://api.sandbox.blackcrow.ai/v1/events/view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    localStorage.setItem("history_id", data["history_id"]);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};
