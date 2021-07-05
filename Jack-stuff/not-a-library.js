window.notATemplateLib = {

    templates: [],
    tagsList: [
        {
            key: 'title',
            tag: '&&&TITLE&&&'
        },
        {
            key: 'imgsrc',
            tag: '&&&IMGSRC&&&'
        },
        {
            key: 'description',
            tag: '&&&DESC&&&'
        }
    ],
    
    getTemplateRefs: function() {
        const templates = document.getElementsByTagName("template");
        if(!templates.length){
            console.error('No templates with tag template found!');
        }
        for (key in templates) {
            if(templates[key].dataset && templates[key].innerHTML){
                this.templates.push({
                    label: this.getTemplateLabel(templates[key].dataset),
                    template: templates[key].innerHTML}
                );
            }
        }
    },

    getTemplateLabel: function(dataSetList){
        if(!dataSetList){
            console.error('dataSetList not provided');
        }
        if(!dataSetList.hasOwnProperty('templatetype')){
            console.error('Template type was not set');
        }
        return dataSetList.templatetype;
    },

    getTemplateByType: function(type){
        if(!type || typeof type !== 'string'){
            console.error('Type was not provided');
        }
        if(!this.templates.length){
            console.error('Templates array empty');
        }

        let result = undefined;

        this.templates.forEach((templateObj)=>{
            if(templateObj.label === type){
                result = templateObj;
            };
        });
        return result;
    },

    fillTemplateTags: function(tagsList){
        tagsList = [{
            key: 'title',
            value: 'jacktitle'
        },
        {
            key: 'imgsrc',
            tag: 'jackimg'
        },
        {
            key: 'description',
            tag: 'jackdescription'
        }];

        if(!tagsList && !tagsList.length){
            console.error('Tagslist was not provided or empty');
        }

        

        // Check if all provided tags exist
        // tagsList.forEach((tagObj)=>{
        //     var test = this.tagsList.some((tag) => {
        //         debugger;
        //         if(tag.key !== tagObj.key){
        //             debugger;
        //         }
        //     });
        //     debugger;
            
        //     // if(this.tagsList.some(tag => tag.key !== tagObj.key)){
        //     //     console.error(`Tag: ${tag.key} not supported tag`);
        //     // }
        // });
        debugger;
    }

};
window.notATemplateLib.getTemplateRefs();