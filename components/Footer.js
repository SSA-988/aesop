function Footer() {
  return (
    <div className="pl-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-y-9 py-10 bg-stone-600">
      <div>
        <input
          className="w-full outline-none border-2 border-white text-black bg-stone-600 h-8"
          type="text"
          placeholder="Email Adress"
        />
        <h2 className="text-sm text-white  mt-3 mr-3">
          Subscribe to receive communications from Aesop about our products and
          services. By subscribing, you confirm you have read and accept our
          privacy policy{" "}
        </h2>
        <h2 className="mt-5 text-white font-bold">Sustainability</h2>
        <p className="text-sm mb-4 mt-2 text-white">
          All Aesop products are vegan, and we do not test our formulations or
          ingredients on animals. We are Leaping Bunny approved and a Certified
          B Corporation. Learn more
        </p>
      </div>

     <h2></h2>

      <div className="space-y-4 text-xs 2xl:ml-10 text-white">
        <h5 className="font-bold">Orders & support</h5>
        <hr className="w-32" />
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Returns</p>
        <p>Order History</p>
        <p>Terms & conditions</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">Services</h5>
        <hr className="w-32" />
        <p>Live assistance</p>
        <p>Corporate gifts</p>
        <p>Facial appointments </p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">Location preferences</h5>
        <hr className="w-32" />
        <p>Shipping: Hong Kong (S.A.R)</p>
        <p>Language: English</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">About</h5>
        <hr className="w-32" />
        <p>Our Story</p>
        <p>Foundation</p>
        <p>Careers</p>
        <p>Privacy Policy</p>
        <p>Accessibility</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">Social Media</h5>
        <hr className="w-32" />
        <p>Instagram</p>
        <p>Twitter</p>
        <p>LinkedIn </p>
        <p>WeChat</p>
        <p>Weibo </p>
      </div>
    </div>
  );
}

export default Footer;
