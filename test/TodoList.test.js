const { assert } = require("chai");

const TodoList = artifacts.require("TodoList");

contract("TodoList", (accounts) => {
  before(async () => {
    this.todoList = await TodoList.deployed();
  });

  it("deployes successfully", async () => {
    const address = await this.todoList.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("lists tasks", async () => {
    const taskCount = await this.todoList.taskCount();
    const task = await this.todoList.tasks(taskCount - 1);
    console.log(task.id.toNumber());
    console.log(taskCount.toNumber());
    console.log(task.content);
    console.log(task.completed);
    assert.equal(taskCount.toNumber(), 1);
    assert.equal(task.id.toNumber(), taskCount.toNumber() - 1);
    assert.equal(task.content, "learning solidity");
    assert.equal(task.completed, false);
  });

  it("creates tasks", async () => {
    const result = await this.todoList.createTask("A new task");
    const taskCount = await this.todoList.taskCount();
    assert.equal(taskCount, 2);
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), 2);
    assert.equal(event.content, "A new task");
    assert.equal(event.completed, false);
  });
});
