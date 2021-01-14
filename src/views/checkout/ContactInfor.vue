<template>
    <div>
        <p class="my-5 text-2xl font-bold"> Contact Information </p>
        <span>We only use your email address for updating your order information!</span>
        
        <div class="w-full">

            <input name="email" :id="'email--'+addressType" placeholder="Email (For Order Confirmation) *" type="email" :class="'p-3 rounded checkout__email checkout__email--'+addressType " v-model="attributes.email" >

        </div>

        <!-- Shipping Info -->
        <div class="mt-5 w-full">
            <p class="my-5 text-2xl font-bold" v-if="addressType == 'shipping'"> Shipping Address </p>
            <p class="my-5 text-2xl font-bold" v-else> Billing Address </p>
            <span>Fill your shipping address to get the correct shipping cost</span>
            <div class="flex flex-wrap">

                <div class="w-1/2 mt-3">
                    <input v-model="attributes.first_name" name="first_name" type="text" :class="'w-95 rounded checkout__first-name checkout__first-name--'+addressType " placeholder="First name *" >
                </div>

                <div class="w-1/2 mt-3">
                    <input v-model="attributes.last_name" name="last_name" type="text" :class="'float-right w-95 rounded checkout__last-name checkout__last-name--'+addressType " placeholder="Last name *" >
                </div>

                <div class="w-full mt-3">
                    <input v-model="attributes.address1" name="address1" type="text" :class="'rounded checkout__address1 checkout__address1--'+addressType" placeholder="Address *" >
                </div>

                <div class="w-1/2 mt-3">
                    <select v-model="attributes.country_code" :class="'block w-95  checkout__country-code checkout__country-code--'+addressType">
                    <option v-for="countryName, countryCode in countries" :value="countryCode">{{ countryName }}</option>
                    </select>
                </div>

                <div class="w-1/2 mt-3">
                    <input v-model="attributes.city" name="city" type="text" :class="'float-right w-95 rounded checkout__city checkout__city--'+addressType " placeholder="City *" >
                </div>

                <div class="w-1/2 mt-3">

                    <select v-if="attributes.country_code === 'US'" v-model="attributes.province" :class="'block w-95  checkout__province checkout__province--'+addressType">
                        <option value="">Select Your State</option>
                        <option v-for="stateName, stateCode in usStates" :value="stateCode">{{ stateName }}</option>
                    </select>

                    <select v-else-if="attributes.country_code === 'CA'" v-model="attributes.province" :class="'block w-95  checkout__province checkout__province--'+addressType">
                        <option value="">Select Your State</option>
                        <option v-for="provinceName, provinceCode in caProvinces" :value="provinceCode">{{ provinceName }}</option>
                    </select>

                    <input v-else type="text" :class="'w-95 rounded  checkout__province checkout__province--'+addressType" placeholder="State / Province *" v-model="attributes.province" />

                </div>

                <div class="w-1/2 mt-3">
                    <input v-model="attributes.postal_code" name="zip" type="text" :class="'w-95 rounded float-right checkout__postal-code checkout__postal-code--'+addressType " placeholder="Zip / Postal Code *" >
                </div>

                <div class="w-full mt-3">
                    <input v-model="attributes.phone" type="text" name="phone" :id="'phone--'+addressType" :class="'rounded checkout__phone checkout__phone--'+addressType" placeholder="Phone Numbers (For Shipping Notification) *">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    props: ['callback', 'presetAttributes', 'addressType'],

    data() {
        return {

            unit: '',
            attributes: {
                email: '',
                phone: '',
                first_name: '',
                last_name: '',
                address1: '',
                address2: '',
                country_code: 'US',
                province: '',
                city: '',
                postal_code: ''
            },
            countries: { "US": "United States", "GB": "United Kingdom", "CA": "Canada", "AF": "Afghanistan", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "AD": "Andorra", "AO": "Angola", "AI": "Anguilla", "AQ": "Antarctica", "AG": "Antigua and Barbuda", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BV": "Bouvet Island", "BR": "Brazil", "BQ": "British Antarctic Territory", "IO": "British Indian Ocean Territory", "VG": "British Virgin Islands", "BN": "Brunei", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "KH": "Cambodia", "CM": "Cameroon", "CT": "Canton and Enderbury Islands", "CV": "Cape Verde", "KY": "Cayman Islands", "CF": "Central African Republic", "TD": "Chad", "CL": "Chile", "CN": "China", "CX": "Christmas Island", "CC": "Cocos [Keeling] Islands", "CO": "Colombia", "KM": "Comoros", "CG": "Congo - Brazzaville", "CD": "Congo - Kinshasa", "CK": "Cook Islands", "CR": "Costa Rica", "HR": "Croatia", "CU": "Cuba", "CY": "Cyprus", "CZ": "Czech Republic", "CI": "Côte d’Ivoire", "DK": "Denmark", "DJ": "Djibouti", "DM": "Dominica", "DO": "Dominican Republic", "NQ": "Dronning Maud Land", "DD": "East Germany", "EC": "Ecuador", "EG": "Egypt", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "ET": "Ethiopia", "FK": "Falkland Islands", "FO": "Faroe Islands", "FJ": "Fiji", "FI": "Finland", "FR": "France", "GF": "French Guiana", "PF": "French Polynesia", "TF": "French Southern Territories", "FQ": "French Southern and Antarctic Territories", "GA": "Gabon", "GM": "Gambia", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GI": "Gibraltar", "GR": "Greece", "GL": "Greenland", "GD": "Grenada", "GP": "Guadeloupe", "GU": "Guam", "GT": "Guatemala", "GG": "Guernsey", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "HM": "Heard Island and McDonald Islands", "HN": "Honduras", "HK": "Hong Kong SAR China", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran", "IQ": "Iraq", "IE": "Ireland", "IM": "Isle of Man", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JE": "Jersey", "JT": "Johnston Island", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KI": "Kiribati", "KW": "Kuwait", "KG": "Kyrgyzstan", "LA": "Laos", "LV": "Latvia", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LI": "Liechtenstein", "LT": "Lithuania", "LU": "Luxembourg", "MO": "Macau SAR China", "MK": "Macedonia", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "MV": "Maldives", "ML": "Mali", "MT": "Malta", "MH": "Marshall Islands", "MQ": "Martinique", "MR": "Mauritania", "MU": "Mauritius", "YT": "Mayotte", "FX": "Metropolitan France", "MX": "Mexico", "FM": "Micronesia", "MI": "Midway Islands", "MD": "Moldova", "MC": "Monaco", "MN": "Mongolia", "ME": "Montenegro", "MS": "Montserrat", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar [Burma]", "NA": "Namibia", "NR": "Nauru", "NP": "Nepal", "NL": "Netherlands", "AN": "Netherlands Antilles", "NT": "Neutral Zone", "NC": "New Caledonia", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "NU": "Niue", "NF": "Norfolk Island", "KP": "North Korea", "MP": "Northern Mariana Islands", "NO": "Norway", "OM": "Oman", "PC": "Pacific Islands Trust Territory", "PK": "Pakistan", "PW": "Palau", "PS": "Palestinian Territories", "PA": "Panama", "PZ": "Panama Canal Zone", "PG": "Papua New Guinea", "PY": "Paraguay", "YD": "People's Democratic Republic of Yemen", "PE": "Peru", "PH": "Philippines", "PN": "Pitcairn Islands", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "RO": "Romania", "RU": "Russia", "RW": "Rwanda", "RE": "Réunion", "BL": "Saint Barthélemy", "SH": "Saint Helena", "KN": "Saint Kitts and Nevis", "LC": "Saint Lucia", "MF": "Saint Martin", "PM": "Saint Pierre and Miquelon", "VC": "Saint Vincent and the Grenadines", "WS": "Samoa", "SM": "San Marino", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "CS": "Serbia and Montenegro", "SC": "Seychelles", "SL": "Sierra Leone", "SG": "Singapore", "SK": "Slovakia", "SI": "Slovenia", "SB": "Solomon Islands", "SO": "Somalia", "ZA": "South Africa", "GS": "South Georgia and the South Sandwich Islands", "KR": "South Korea", "ES": "Spain", "LK": "Sri Lanka", "SD": "Sudan", "SR": "Suriname", "SJ": "Svalbard and Jan Mayen", "SZ": "Swaziland", "SE": "Sweden", "CH": "Switzerland", "SY": "Syria", "ST": "São Tomé and Príncipe", "TW": "Taiwan", "TJ": "Tajikistan", "TZ": "Tanzania", "TH": "Thailand", "TL": "Timor-Leste", "TG": "Togo", "TK": "Tokelau", "TO": "Tonga", "TT": "Trinidad and Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "TC": "Turks and Caicos Islands", "TV": "Tuvalu", "UM": "U.S. Minor Outlying Islands", "PU": "U.S. Miscellaneous Pacific Islands", "VI": "U.S. Virgin Islands", "UG": "Uganda", "UA": "Ukraine", "SU": "Union of Soviet Socialist Republics", "AE": "United Arab Emirates", "ZZ": "Unknown or Invalid Region", "UY": "Uruguay", "UZ": "Uzbekistan", "VU": "Vanuatu", "VA": "Vatican City", "VE": "Venezuela", "VN": "Vietnam", "WK": "Wake Island", "WF": "Wallis and Futuna", "EH": "Western Sahara", "YE": "Yemen", "ZM": "Zambia", "ZW": "Zimbabwe", "AX": "Åland Islands", },
            usStates: { "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" },
            caProvinces: { "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba", "NB": "New Brunswick", "NL": "Newfoundland and Labrador", "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut", "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Québec", "SK": "Saskatchewan", "YT": "Yukon" },
        }
        
    },

    created() {
            
        if (this.presetAttributes) {
            this.attributes = this.presetAttributes;
        }

    },

    computed: {

        attributesHash: function() {
            return JSON.stringify(this.attributes);
        }
    },

    watch: {

        attributesHash: function() {
            if (typeof this.callback === 'function') {
                return this.callback(this.attributes);
            }
        },

        presetAttributes: function(attrs) {
            this.attributes = JSON.parse(JSON.stringify(attrs));
            console.log(attrs);
        }
    }
    
}
</script>

<style lang="scss">
    input, select {
        display: block;
        width: 100%;
        height: 44px;
        padding: 12px 10px;
        font-size: 14px;
        line-height: 1.285714286;
        color: #666;
        background-color: #fff;
        background-image: none;
        border: 1px solid #aaa;
        border-radius: 2px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
        transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    }
</style>