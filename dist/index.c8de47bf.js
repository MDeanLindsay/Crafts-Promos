function addBrand(){var e=document.getElementById("brand-input").value;return""!=e?"Brand: "+e:""}function addPromo(){var e=document.getElementById("promo-input").value;return""!=e?"\nPromotion Code: "+e:""}function addMediaID(){var e=document.getElementById("brand-input").value,t=document.getElementById("promo-input").value;return"CT"==e?"\nMedia ID: C"+t:"KP"==e?"\nMedia ID: K"+t:"ST"==e?"\nMedia ID: S"+t:"WC"==e?"\nMedia ID: W"+t:""}function addPromoType(){var e=document.getElementById("promo-type-input").value;return""!=e?"\nProcessor: "+e:""}function addUseCase(){var e=document.getElementById("use-case-input").value;return""!=e?"\nAccount Limit: "+e:""}function addStartDate(){var e=document.getElementById("datepicker1").value;return""!=e?"\nStart Date: "+e+" 12:00 A.M.":""}function addEndDate(){var e=document.getElementById("datepicker2").value;return""!=e?"\nEnd Date: "+e+" 11:59 P.M.":""}function addTestDate(){var e=document.getElementById("datepicker3").value;return""!=e?"\nTest Date: "+e+" 12:00 A.M.":""}function addDiscount(){var e=document.getElementById("discount-input").value,t=document.getElementById("discount-type-input").value;return"$"==t?"\nDiscount: "+t+e:"%"==t?"\nDiscount: "+e+t:""}function addThreshold(){var e=document.getElementById("threshold-input").value,t=document.getElementById("threshold-type-input").value;return"$"==t?"\nThreshold: "+t+e:"Units"==t?"\nThreshold: "+e+" "+t:""}function addItems(){var e=document.getElementById("item-input").value;return""!=e?"\nItems: "+e:""}function addDescription(){var e=document.getElementById("description-input").value;return""!=e?"\nDescription: "+e:""}function myFunction(){document.getElementById("output").value=addBrand()+addPromoType()+addPromo()+addMediaID()+addUseCase()+addStartDate()+addEndDate()+addTestDate()+addDiscount()+addThreshold()+addItems()+addDescription()}function copyText(){var e=document.getElementById("yourUTM");e.select(),navigator.clipboard.writeText(e.value)}
//# sourceMappingURL=index.c8de47bf.js.map
