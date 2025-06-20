class SearchSuggestionSystem{
    constructor(products){
        this.product=products.sort();
    }

    getSuggestions(searchWord) {
        let results=[]
        let prefix=''
        for (let i of searchWord){
            prefix+=i
            let suggestions=[]
            for (let j of this.product){

                if (suggestions.length===3)break
                if (j.startsWith(prefix)) suggestions.push(j)
            }
            results.push(suggestions)
        }
        return results
        
    }

}
