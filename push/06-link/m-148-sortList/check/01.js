/*
  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 1 -> 2 -> 3 -> 4
 */
/**
 * 归并排序
 * 1. 找到中点 pivot
 * 2. sortList
 * 3. merge
 * @param {ListNode} head
 * @return {ListNode}
 */
const { ListNode } = require('../../utils')
var sortList = function (head) {}

/**
 * 参考 21mergeTwoLists
 * @param l
 * @param r
 * @returns {*}
 */

module.exports.sortList = sortList
