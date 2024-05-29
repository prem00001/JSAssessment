/* Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created */

// create a variable to hold your NFT's
const NFT_holder=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (id, name, age, email, address) 
{
    const NFT_values=
    {
        "ID":id,
        "Name":name,
        "Age":age,
        "Email":email,
        "Address":address
    }
    NFT_holder.push(NFT_values);
    console.log("Minted ID: " +id);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () 
{
    for(let i=0; i<NFT_holder.length; i++)
        {
            console.log("\nID : \t  " + NFT_holder[i].ID);
            console.log("Name : \t  " + NFT_holder[i].Name);
            console.log("Age : \t  " + NFT_holder[i].Age);
            console.log("Email :\t  " + NFT_holder[i].Email);
            console.log("Address : " + NFT_holder[i].Address);
        }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() 
{
    console.log("\nTotal number of NFT's: " + NFT_holder.length);
    
}

// call your functions below this line
mintNFT(1, "Prem", 19, "premxy@gmail.com", "chandigarh");
mintNFT(2, "Chandana", 21, "chandooxy@gmail.com", "guntoor");
mintNFT(3, "Khushi", 20, "khushixy@gmail.com", "nangal");
mintNFT(4, "Nikita", 19, "niksxy@gmail.com", "mohali");
mintNFT(5, "Rosh", 24, "roshhxy@gmail.com", "jodhpur");
listNFTs();
getTotalSupply();

