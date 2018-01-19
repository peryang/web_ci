SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `user` varchar(100) DEFAULT NULL COMMENT '用户名',
  `passwd` varchar(100) DEFAULT NULL COMMENT '密码',
  `name` varchar(100) DEFAULT NULL COMMENT '名称',
  `timestamp` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




INSERT INTO userinfo VALUES("bjyxw", "bjyxw123654", "张三", "432432432")