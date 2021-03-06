var alo = require('./controller.js');

module.exports = function(app){
    
    app.get('/PostUser_100/:TimeStamp',function(req,res){
        console.log("I'm in routes Post");
       alo.invoke_iPostUser_100(req,res); 
    });
    
    app.get('/PostAHUser_200/:TimeStamp',function(req,res){
        console.log("I'm in routes AHUser_200 Post");
       alo.invoke_iPostAHUser_200(req,res); 
    });
    
    app.get('/PostUser_300/:TimeStamp',function(req,res){
        console.log("I'm in routes User_300 Post");
       alo.invoke_iPostUser_300(req,res); 
    });
    
    app.get('/PostUserSpe/:alo',function(req,res){
        console.log("I'm in routes Specific Post");
       alo.invoke_iPostUserSpe(req,res); 
    });
    
    app.get('/GetUser_100',function(req,res){
        console.log("I'm in routes Get");
       alo.query_qGetUser_100(req,res); 
    });
    
    app.get('/GetUserSpe/:UserID',function(req,res){
        console.log("I'm in routes Specific Get");
       alo.query_qGetUserSpe(req,res); 
    });
    
    app.get('/GetItem_1000',function(req,res){
        console.log("I'm in routes Get Item");
       alo.query_qGetItem_1000(req,res); 
    });
    
    app.get('/GetItemSpe/:ItemID',function(req,res){
        console.log("I'm in routes Get Specific Item");
       alo.query_qGetItemSpe(req,res); 
    });
    
    app.get('/GetAuctionRequest/:AuctionID',function(req,res){
        console.log("I'm in routes Get AuctionRequest");
       alo.query_qGetAuctionRequest(req,res); 
    });
    
    app.get('/GetListOfBids/:AuctionID',function(req,res){
        console.log("I'm in routes Get List Of Bids");
       alo.query_qGetListOfBids(req,res); 
    });
    
     app.get('/GetHighestBid/:AuctionID',function(req,res){
        console.log("I'm in routes Get Highest Bid");
       alo.query_qGetHighestBid(req,res); 
    });
    
    app.get('/PostItem_1000/:TimeStamp',function(req,res){
        console.log("I'm in routes PostItem");
       alo.invoke_iPostItem_1000(req,res); 
    });
    
    app.get('/PostItemSpe/:aloItem',function(req,res){
        console.log("I'm in routes Specific PostItem");
       alo.invoke_iPostItemSpe(req,res); 
    });
    
    app.get('/PostAuctionRequest_1111/:TimeStamp',function(req,res){
        console.log("I'm in routes PostAuctionRequest_1111");
       alo.invoke_iPostAuctionRequest_1111(req,res); 
    });
    
    app.get('/PostAuctionRequestSpe/:aloAuctionRequest',function(req,res){
        console.log("I'm in routes Specific PostAuctionRequest");
       alo.invoke_iPostAuctionRequestSpe(req,res); 
    });
    
    app.get('/PostBid/:aloBid',function(req,res){
        console.log("I'm in routes PostBid");
       alo.invoke_iPostBid(req,res); 
    });

    app.get('/OpenAuctionRequestForBids/:aloOpenAuction',function(req,res){
        console.log("I'm in routes OpenAuctionRequestForBids");
       alo.invoke_iOpenAuctionRequestForBids(req,res); 
    });
    
    app.get('/CloseOpenAuctions/:aloCloseOpenAuction',function(req,res){
        console.log("I'm in routes CloseOpenAuctions");
       alo.invoke_iCloseOpenAuctions(req,res); 
    });
    
    app.get('/TransferItem/:aloTransfer',function(req,res){
        console.log("I'm in routes TransferItem");
       alo.invoke_iTransferItem(req,res); 
    });
    
    app.get('/PostUserItem/:aloUserItem',function(req,res){
        console.log("I'm in routes PostUserItem");
       alo.invoke_iPostUserItem(req,res); 
    });
}