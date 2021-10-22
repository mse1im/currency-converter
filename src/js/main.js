import { exchangeElement , exchangeStatus , Money } from './data.js';

Money.getEURValue();
exchangeElement.addEventListener("input", Money.convertMoney);
exchangeStatus.addEventListener("change",Money.convertMoney);