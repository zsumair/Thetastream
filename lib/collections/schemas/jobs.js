var jobFields = {
      _id: {
        type: String,
        optional: true,
        autoform:{
          omit:true
          }
        },
       title: {
         type: String,
         label: 'JobTitle',
         max: 40
       },
      cname: {
        type: String,
        label: 'CompanyName',
        max: 28
      },
      ccategory:{
        type:String,
        label: 'Category',
        autoform:{
          type: "select",
          options: {
            itdept: "IT Dept",
            manager: "Manager",
            marketing: "Marketing",
            fmcg: "FMCG"
          }
        }
      },
       cdesc: {
         type: String,
         label: 'Company Description',
         autoform:{
           afFieldInput:{
             type: 'textarea'
           }
         }
       },
       cemail:{
         type:String,
         label: 'CompanyEmail',
         regEx: SimpleSchema.RegEx.Email,
         autoform: {
           afFieldInput: {
             type: 'email'
           }
         }
       },
       jtype:{
         type:String,
         label: 'Job Type',
         autoform:{
           type: "select",
           options: {
             fulltime: "Fulltime",
             parttime: "Part-Time",
             freelancer: "Freelancer",
             internship: "Internship"
           }
         }
       },
       jdesc:{
         type: String,
         label: 'JobDescription',
         optional: true
       },
       jreq:{
         type: String,
         label: 'JobRequirement',
         autoform:{
           afFieldInput:{
             type: 'textarea'
           }
         }
       },
       city:{
         type: String,
         label: 'City'
       },
       createdAt:{
         type: Date,
         autoValue: function(){
           if(this.isInsert){
             return new Date();
           }
         },
         autoform: {
           omit: true
         }
        }

};

JobSchema = new SimpleSchema(jobFields);
