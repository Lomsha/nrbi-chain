# The blockchain Application

The crypto currency is now fully implemented.To confirm this, I opened a couple of instances and conducted some transactions between the 2.
I used the first instance to send some currencies to the second. Got the the address of the second instance by running http://localhost:3002/public-key

![address of first instance](https://user-images.githubusercontent.com/89515415/180617640-0cb6d9f5-ebde-4a69-9a72-f09676ce3e75.png)

Copied the address and in a second tab made a post request hitting the transact endpoint of our first instance and send currency to that address of the second instance. Made a couple of these transactions.
![Added_transaction](https://user-images.githubusercontent.com/89515415/180617868-ad3c4856-ed3e-4051-9924-73c5dd77dca7.png)
The result will be the transaction output object is that we have 400 left over for the first instance and we are sending 2 output objects to the second instance by its address of 50 currency.

Made sure that the 2 transactions created exist by hitting the transactions endpoint of each instance.
![transaction_endpoint_inst_1](https://user-images.githubusercontent.com/89515415/180617954-447b73c2-fc6a-4896-b250-26d284277205.png)
![Transactions_endpoint_instance_2](https://user-images.githubusercontent.com/89515415/180617972-1248820e-8591-45e4-aaa3-83554ea4c0ae.png)
The transaction pool has the transactions with the first and second instance.

Mined the transactions using any of the instances by hitting the mine-transactions endpoint. Using the first one we hit http://localhost:3001/mine-transactions
![mine-transactions-1](https://user-images.githubusercontent.com/89515415/180618026-6445a8b0-6ac5-473a-a918-2982c8b4eb6a.png)
![mine-transactions-2](https://user-images.githubusercontent.com/89515415/180618242-b64e9375-9bb4-43e9-9696-1a901e0c69e3.png)
![mine-transactions-3](https://user-images.githubusercontent.com/89515415/180618272-16e2baf7-11a2-446a-96bc-5646176d2e96.png)

This generates a blockchain as a response whose second object is a big transaction list.It contains the transaction object that was generated before and also the reward transaction for the original miner. Depending on how many times the transaction was created with the original instance the wallet should have a decreased amount of currency .With the transactions created twice, the resulting balance is 400 plus  the 50 currency for the reward of mining by the first instance.

To check the balance, conducted a POST request to the transact end point.
![reward-transaction](https://user-images.githubusercontent.com/89515415/180618389-72d53d56-772c-4c13-9a43-dd2748cad39e.png)
The balance of the wallet appears just as expected with the subtracted amount from all its previous transactions and the added amount from its reward.


