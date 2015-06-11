// Meteor.publish("allJobs", function(limit){
//   if(limit > Jobs.find().count()){
//     limit = 0;
//   }
//   return Jobs.find({},{limit:limit});
// });

Meteor.publish('allJobs', function(limit){
  return Jobs.find({}, {limit: limit});
});

Meteor.publish('singleJob', function(id){
  return Jobs.find({_id:id});
});
