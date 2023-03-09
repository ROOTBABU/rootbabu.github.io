Send VS Transfer VS Call:

There is a way to forward more gas to the receiving contract using addr.call{value: x}(""). This is essentially the same as addr.transfer(x), only that it forwards all remaining gas and opens up the ability for the recipient to perform more expensive actions (and it returns a failure code instead of automatically propagating the error). This might include calling back into the sending contract or other state changes you might not have thought of. So it allows for great flexibility for honest users but also for malicious actors.

The problem is not too serious here because of the limited gas as part of send, but it still exposes a weakness: Ether transfer can always include code execution, so the recipient could be a contract that calls back into withdraw. This would let it get multiple refunds and basically retrieve all the Ether in the contract. In particular, the following contract will allow an attacker to refund multiple times as it uses call which forwards all remaining gas by default:

https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/
