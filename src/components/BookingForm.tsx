"use client";
import React, { useState } from "react";

interface BookingFormProps {
  price: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ price }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(false);
  const [medicalInsurance, setMedicalInsurance] = useState(false);

  const adultPrice = 490;
  const childPrice = 200;
  const healthPrice = 220;
  const medicalPrice = 45;

  const total =
    adults * adultPrice +
    children * childPrice +
    (healthInsurance ? healthPrice : 0) +
    (medicalInsurance ? medicalPrice : 0);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm mx-auto sticky top-8">
      <h3 className="font-bold text-lg mb-2 border-l-4 border-primary pl-2">Booking Form</h3>
      <div className="mb-2 text-muted-foreground">Price</div>
      <div className="flex items-baseline mb-4">
        <span className="text-xl font-semibold mr-2">From</span>
        <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
      </div>
      <hr className="my-3" />
      <div className="mb-4">
        <div className="font-semibold mb-1">Date</div>
        <div className="text-muted-foreground">16 - Jun - 2024</div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-1"><span className="font-semibold">Adults</span><span className="text-muted-foreground">Over 18 ($490)</span></div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full border w-8 h-8 flex items-center justify-center" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
          <span className="w-6 text-center">{adults}</span>
          <button type="button" className="rounded-full border w-8 h-8 flex items-center justify-center" onClick={() => setAdults(adults + 1)}>+</button>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-1"><span className="font-semibold">Children</span><span className="text-muted-foreground">Under 18 ($200)</span></div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full border w-8 h-8 flex items-center justify-center" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
          <span className="w-6 text-center">{children}</span>
          <button type="button" className="rounded-full border w-8 h-8 flex items-center justify-center" onClick={() => setChildren(children + 1)}>+</button>
        </div>
      </div>
      <hr className="my-3" />
      <div className="mb-2 font-semibold">Extra Services</div>
      <div className="mb-2 text-muted-foreground text-sm">Add extra services on your reservation</div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={healthInsurance} onChange={e => setHealthInsurance(e.target.checked)} />
          Health Insurance ($220)
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={medicalInsurance} onChange={e => setMedicalInsurance(e.target.checked)} />
          Medical Insurance ($45)
        </label>
      </div>
      <button className="w-full bg-primary text-black py-3 rounded-full font-semibold text-lg mt-2">
        Booking Now For ${total}
      </button>
    </div>
  );
};

export default BookingForm;
