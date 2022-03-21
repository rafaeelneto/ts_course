"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedCollection = /** @class */ (function (_super) {
    __extends(LinkedCollection, _super);
    function LinkedCollection() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedCollection.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedCollection.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedCollection.prototype.at = function (index) {
        var OutOfBoundError = new Error("Index out of bound");
        if (!this.head) {
            throw OutOfBoundError;
        }
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw OutOfBoundError;
    };
    LinkedCollection.prototype.swap = function (index) {
        // swap elements
        var leftNode = this.at(index);
        var rightNode = this.at(index + 1);
        var leftData = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftData;
    };
    LinkedCollection.prototype.compare = function (index) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(index).data > this.at(index + 1).data;
    };
    LinkedCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedCollection;
}(Sorter_1.Sorter));
exports.LinkedCollection = LinkedCollection;
