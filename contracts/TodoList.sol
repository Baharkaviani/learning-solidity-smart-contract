// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract TodoList {
    // state variables
    uint public taskCount = 0; // task counter variable which shows the numbers of tasks in whole blockchain and smart contract

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    // another state variable
    // 'tasks' is a variable with type of 'mapping(uint => Task)'
    // which means it returns a Task if we give the id with uint type
    mapping(uint => Task) public tasks;

    constructor () public {
        // our default task in the dapp
        createTask("learning solidity");
    }

    function createTask(string memory _content) public {
        tasks[taskCount] = Task(taskCount, _content, false);
        taskCount ++;
    }
}