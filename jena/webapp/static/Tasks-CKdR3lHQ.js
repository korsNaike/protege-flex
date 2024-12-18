import{M as u}from"./Menu-BPKdTlAo.js";import{_,b$ as k,a as f,b as s,d as n,i as r,o as h}from"./index-DRoCyVBH.js";const p={name:"ManageTasks",data(){return{polling:null,tasks:[],isBusy:!0,fields:[{key:"task",label:"task",sortable:!0,sortDirection:"asc"},{key:"taskId",label:"task ID",sortable:!0,sortDirection:"asc"},{key:"started",label:"started",sortable:!0,sortDirection:"asc"},{key:"finished",label:"finished",sortable:!0,sortDirection:"asc"}]}},computed:{tasksReversed(){return this.tasks?[...this.tasks].reverse():[]}},components:{Menu:u,"table-listing":k},async beforeRouteEnter(e,t,a){a(o=>{o.$fusekiService.getTasks().then(i=>{o.tasks=i.data,o.isBusy=null})})},mounted(){const e=this;this.polling=setInterval(async()=>{e.isBusy=!0,e.$fusekiService.getTasks().then(t=>{e.tasks=t.data,e.isBusy=null})},1e4)},beforeRouteLeave(e,t,a){this.polling&&clearInterval(this.polling),a()}},b={class:"container-fluid"},m={class:"row mt-4"},v={class:"col-12"},y={class:"card"},g={class:"card-header"},B={class:"card-body"},T={class:"row"},x={class:"col"};function D(e,t,a,o,i,l){const c=r("Menu"),d=r("table-listing");return h(),f("div",b,[s("div",m,[s("div",v,[t[0]||(t[0]=s("h2",null,"Tasks",-1)),s("div",y,[s("nav",g,[n(c)]),s("div",B,[s("div",null,[s("div",T,[s("div",x,[n(d,{fields:i.fields,items:l.tasksReversed,"is-busy":i.isBusy,placeholder:"Filter tasks","empty-text":"No tasks created","empty-filtered-text":"No tasks found"},null,8,["fields","items","is-busy"])])])])])])])])])}const N=_(p,[["render",D]]);export{N as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3MtQ0tkUjNsSFEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3cy9tYW5hZ2UvVGFza3MudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS1cbiAgIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmUgb3IgbW9yZVxuICAgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoXG4gICB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4gICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byBZb3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMFxuICAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aFxuICAgdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLS0+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICA8aDI+VGFza3M8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlLWxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInRhc2tzUmV2ZXJzZWRcIlxuICAgICAgICAgICAgICAgICAgICA6aXMtYnVzeT1cImlzQnVzeVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIHRhc2tzXCJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHktdGV4dD1cIk5vIHRhc2tzIGNyZWF0ZWRcIlxuICAgICAgICAgICAgICAgICAgICBlbXB0eS1maWx0ZXJlZC10ZXh0PVwiTm8gdGFza3MgZm91bmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1lbnUgZnJvbSAnQC9jb21wb25lbnRzL21hbmFnZS9NZW51LnZ1ZSdcbmltcG9ydCBUYWJsZUxpc3RpbmcgZnJvbSAnQC9jb21wb25lbnRzL2RhdGFzZXQvVGFibGVMaXN0aW5nLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWFuYWdlVGFza3MnLFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb2xsaW5nOiBudWxsLFxuICAgICAgdGFza3M6IFtdLFxuICAgICAgaXNCdXN5OiB0cnVlLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0YXNrJyxcbiAgICAgICAgICBsYWJlbDogJ3Rhc2snLFxuICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgIHNvcnREaXJlY3Rpb246ICdhc2MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0YXNrSWQnLFxuICAgICAgICAgIGxhYmVsOiAndGFzayBJRCcsXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgc29ydERpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3N0YXJ0ZWQnLFxuICAgICAgICAgIGxhYmVsOiAnc3RhcnRlZCcsXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgc29ydERpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2ZpbmlzaGVkJyxcbiAgICAgICAgICBsYWJlbDogJ2ZpbmlzaGVkJyxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAnYXNjJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgdGFza3NSZXZlcnNlZCAoKSB7XG4gICAgICBpZiAoIXRoaXMudGFza3MpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLnRoaXMudGFza3NdLnJldmVyc2UoKVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgTWVudSxcbiAgICAndGFibGUtbGlzdGluZyc6IFRhYmxlTGlzdGluZ1xuICB9LFxuXG4gIGFzeW5jIGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgbmV4dCh2bSA9PiB7XG4gICAgICB2bS4kZnVzZWtpU2VydmljZVxuICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdm0udGFza3MgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgdm0uaXNCdXN5ID0gbnVsbFxuICAgICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgY29uc3Qgdm0gPSB0aGlzXG4gICAgdGhpcy5wb2xsaW5nID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgdm0uaXNCdXN5ID0gdHJ1ZVxuICAgICAgdm0uJGZ1c2VraVNlcnZpY2VcbiAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHZtLnRhc2tzID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgIHZtLmlzQnVzeSA9IG51bGxcbiAgICAgICAgfSlcbiAgICB9LCAxMDAwMClcbiAgfSxcblxuICBiZWZvcmVSb3V0ZUxlYXZlICh0bywgZnJvbSwgbmV4dCkge1xuICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsaW5nKVxuICAgIH1cbiAgICBuZXh0KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiTWVudSIsIlRhYmxlTGlzdGluZyIsInRvIiwiZnJvbSIsIm5leHQiLCJ2bSIsInJlc3BvbnNlIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY2FjaGUiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X01lbnUiLCJfY29tcG9uZW50X3RhYmxlX2xpc3RpbmciLCIkZGF0YSIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoicUhBb0RBLE1BQUtBLEVBQVUsQ0FDYixLQUFNLGNBRU4sTUFBUSxDQUNOLE1BQU8sQ0FDTCxRQUFTLEtBQ1QsTUFBTyxDQUFFLEVBQ1QsT0FBUSxHQUNSLE9BQVEsQ0FDTixDQUNFLElBQUssT0FDTCxNQUFPLE9BQ1AsU0FBVSxHQUNWLGNBQWUsS0FDaEIsRUFDRCxDQUNFLElBQUssU0FDTCxNQUFPLFVBQ1AsU0FBVSxHQUNWLGNBQWUsS0FDaEIsRUFDRCxDQUNFLElBQUssVUFDTCxNQUFPLFVBQ1AsU0FBVSxHQUNWLGNBQWUsS0FDaEIsRUFDRCxDQUNFLElBQUssV0FDTCxNQUFPLFdBQ1AsU0FBVSxHQUNWLGNBQWUsS0FDakIsQ0FDRixDQUNGLENBQ0QsRUFFRCxTQUFVLENBQ1IsZUFBaUIsQ0FDZixPQUFLLEtBQUssTUFHSCxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUUsUUFBUSxFQUZ0QixDQUFDLENBR1osQ0FDRCxFQUVELFdBQVksQ0FDVixLQUFBQyxFQUNBLGdCQUFpQkMsQ0FDbEIsRUFFRCxNQUFNLGlCQUFrQkMsRUFBSUMsRUFBTUMsRUFBTSxDQUN0Q0EsRUFBS0MsR0FBTSxDQUNUQSxFQUFHLGVBQ0EsU0FBUyxFQUNULEtBQUtDLEdBQVksQ0FDaEJELEVBQUcsTUFBUUMsRUFBUyxLQUNwQkQsRUFBRyxPQUFTLEtBQ2IsRUFDSixDQUNGLEVBRUQsU0FBVyxDQUNULE1BQU1BLEVBQUssS0FDWCxLQUFLLFFBQVUsWUFBWSxTQUFZLENBQ3JDQSxFQUFHLE9BQVMsR0FDWkEsRUFBRyxlQUNBLFNBQVMsRUFDVCxLQUFLQyxHQUFZLENBQ2hCRCxFQUFHLE1BQVFDLEVBQVMsS0FDcEJELEVBQUcsT0FBUyxLQUNiLENBQ0osRUFBRSxHQUFLLENBQ1QsRUFFRCxpQkFBa0JILEVBQUlDLEVBQU1DLEVBQU0sQ0FDNUIsS0FBSyxTQUNQLGNBQWMsS0FBSyxPQUFPLEVBRTVCQSxFQUFLLENBQ1AsQ0FDRixFQW5IT0csRUFBQSxDQUFBLE1BQU0saUJBQWlCLEVBQ3JCQyxFQUFBLENBQUEsTUFBTSxVQUFVLEVBQ2RDLEVBQUEsQ0FBQSxNQUFNLFFBQVEsRUFFWkMsRUFBQSxDQUFBLE1BQU0sTUFBTSxFQUNWQyxFQUFBLENBQUEsTUFBTSxhQUFhLEVBR25CQyxFQUFBLENBQUEsTUFBTSxXQUFXLEVBRWJDLEVBQUEsQ0FBQSxNQUFNLEtBQUssRUFDVEMsRUFBQSxDQUFBLE1BQU0sS0FBSyxpRUFYOUIsT0FBQUMsRUFBQSxFQUFBQyxFQTJCTSxNQTNCTlQsRUEyQk0sQ0ExQkpVLEVBeUJNLE1BekJOVCxFQXlCTSxDQXhCSlMsRUF1Qk0sTUF2Qk5SLEVBdUJNLENBdEJKUyxFQUFBLENBQUEsSUFBQUEsRUFBQSxDQUFBLEVBQUFELEVBQWMsVUFBVixRQUFLLEVBQUEsR0FDVEEsRUFvQk0sTUFwQk5QLEVBb0JNLENBbkJKTyxFQUVNLE1BRk5OLEVBRU0sQ0FESlEsRUFBUUMsQ0FBQSxJQUVWSCxFQWVNLE1BZk5MLEVBZU0sQ0FkSkssRUFhTSxNQUFBLEtBQUEsQ0FaSkEsRUFXTSxNQVhOSixFQVdNLENBVkpJLEVBU00sTUFUTkgsRUFTTSxDQVJKSyxFQU9FRSxFQUFBLENBTkMsT0FBUUMsRUFBTSxPQUNkLE1BQU9DLEVBQWEsY0FDcEIsVUFBU0QsRUFBTSxPQUNoQixZQUFZLGVBQ1osYUFBVyxtQkFDWCxzQkFBb0IifQ==
