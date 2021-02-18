import profileReducer, { addPost, deletePost } from "./profileReducer"

it('length should increment', ()=>{
    //1. test data
    let action = addPost("Hello");
    let state = {
        postData: [{
                id: 1,
                message: "Finally, I've got a super rare gybrid",
                likes: "45"
            },
            {
                id: 2,
                message: "Hi, there",
                likes: "5"
            }
        ]};
    //2.action
    let newState = profileReducer(state, action);
    
    //3.expectation
    expect(newState.postData.length).toBe(3);
    
});



it('text message should be "Hello"', ()=>{
    //1. test data
    let action = addPost("Hello");
    let state = {
        postData: [{
                id: 1,
                message: "Finally, I've got a super rare gybrid",
                likes: "45"
            },
            {
                id: 2,
                message: "Hi, there",
                likes: "5"
            }
        ]};
    //2.action
    let newState = profileReducer(state, action);
    
    //3.expectation
    expect(newState.postData[2].message).toBe("Hello");
});


// tdd

it("length of postdata should decrement", ()=> {
    let action = deletePost(2);
    let state = {
        postData: [{
                id: 1,
                message: "Finally, I've got a super rare gybrid",
                likes: "45"
            },
            {
                id: 2,
                message: "Hi, there",
                likes: "5"
            }
        ]};

    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(1);


});

//npm run test 
