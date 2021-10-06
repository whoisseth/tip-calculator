/* 
 --FONT SIZE (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 

--SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 

*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    /* font-size: 10px; */
    /* 10px / 16px =0.625 = 62.5% */
    font-size: 62.5%;
}

body {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: hsl(185, 41%, 84%);
    /* padding: 10rem; */
    font-family: "Space Mono", sans-serif;
}

.logo {
    height: 4.8rem;
    margin-bottom: 8rem;
    margin-bottom: 2rem;
    margin-top: 16rem;
    margin-top: 4rem;
}

.container {
    background-color: hsl(0, 0%, 100%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2.4rem;
    border-radius: 20px;
    transition: all 0.5s;
}

.cal-box {
    /* border: 2px solid red; */
    margin-right: 4rem;
    margin-left: 2rem;
    margin: 0 2rem;
    transition: all 0.5s;
}

.caculation-box {
    padding: 2.4rem;
    /* background-color: aqua; */
}

.cal-box label {
    color: hsl(186, 14%, 43%);
    display: block;
    margin-bottom: 0.8rem;
    position: relative;
}

.input-container {
    background-color: hsl(189, 41%, 97%);
    display: flex;
    border-radius: 5px;
    /* overflow: hidden; */
    align-items: center;
    /* position: absolute; */
}

.input-container img {
    height: 1.4rem;
    margin-left: 1.5rem;
    position: absolute;
    z-index: 999;
}

.input-container input {
    position: relative;
    border: none;
    background-color: inherit;
    text-align: right;
    width: 100%;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 700;
    outline-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    border-radius: inherit;
    cursor: pointer;
    padding: 0.4rem 0.2rem;
    /* background-color: red; */
    padding-right: 1rem;
}

.input-container input::placeholder {
    color: rgba(127, 156, 159, 0.553);
    font-weight: inherit;
    padding-right: 1rem;
}


/* .input-container label::after { */

.result-box {
    background-color: hsl(183, 100%, 15%);
    border-radius: 15px;
}

label,
.tip-amount-label {
    font-size: 1.4rem;
    font-weight: 700;
    white-space: nowrap;
}

.margin-bottom {
    margin-bottom: 3rem;
    /* margin-bottom: 2.4rem; */
}

.tips {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    font-size: 2rem;
    font-weight: 500;
    border: none;
    outline-color: red;
}

.tips input {
    /* width: 10%; */
}

.tip-btn {
    color: hsl(189, 41%, 97%);
    /* padding: 0.8rem 1.6rem; */
    padding: 0.6rem 0.4rem;
    text-align: center;
    border-radius: 5px;
    /* width: 9rem; */
    background-color: hsl(183, 100%, 15%);
    cursor: pointer;
    transition: all 0.3s;
}

.tip-btn-active {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-weight: 700;
}

.tip-btn-deactive {
    background-color: hsl(183, 100%, 15%);
    color: hsl(189, 41%, 97%);
    /* color: red; */
}

div.tip-btn:hover {
    /* background-color: hsl(172, 67%, 45%); */
    background-color: rgba(38, 192, 171, 0.5);
    color: hsl(183, 100%, 15%);
    cursor: pointer;
    transition: all 0.3s;
}

.custom-btn {
    background-color: hsl(189, 41%, 97%);
    border: none;
    color: hsl(183, 100%, 15%);
    font-weight: 700;
    font-family: inherit;
    font-size: inherit;
    outline-color: hsl(172, 67%, 45%);
    /* text-align: right; */
    /* width: 12rem; */
}

[contenteditable="true"]:empty:not(:focus):before {
    content: attr(data-text);
}

.custom-btn[data-text] {
    /* color: ; */
    font-weight: 700;
    font-size: 2rem;
    font-family: "Space Mono", sans-serif;
    color: rgba(0, 73, 77, 0.708);
}

.result-box .tip-amount-label {
    color: hsl(189, 41%, 97%);
}

.result-box {
    padding: 2.4rem 3rem;
    display: grid;
}

.tip-cal-box {
    display: flex;
    /* gap: 4rem; */
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.tip-amount-person {
    font-size: 1.2rem;
    color: hsl(184, 14%, 56%);
    font-weight: 700;
    white-space: nowrap;
}

.tip-amount-box {
    color: hsl(172, 67%, 45%);
    text-align: right;
    font-size: 4rem;
    font-weight: 700;
    margin-left: 6.4rem;
    /* margin-left: 8rem; */
    white-space: nowrap;
}

.tip-amount-box img {
    font-weight: 700;
    height: 3rem;
    margin-right: -2.3rem;
    display: inline;
}

.rset-btn {
    background-color: rgba(1, 119, 126, 0.6);
    color: rgba(0, 73, 77, 0.426);
    font-size: 2rem;
    /* color: hsl(172, 67%, 45%); */
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
    padding: 0.3em 0;
    margin-top: 8rem;
}

.rset-btn:hover {
    background-color: rgba(96, 241, 217, 0.623);
    color: hsla(183, 100%, 15%, 0.87);
    cursor: pointer;
    transition: all 0.3s;
}

.active-Reset {
    background-color: hsl(172, 74%, 50%);
    color: hsl(183, 100%, 15%);
}


/*
Mobile view
800px */

@media (max-width: 50em) {
    .cal-box {
        margin-bottom: 3.2rem;
    }
    .container {
        grid-template-columns: 1fr;
    }
    html {
        font-size: 60%;
    }
}


/* 400px  */

@media (max-width: 25em) {
    html {
        font-size: 50%;
    }
}


/* 300px  */

@media (max-width: 18.75em) {
    html {
        font-size: 40%;
    }
}
