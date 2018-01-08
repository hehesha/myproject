/*
Navicat MySQL Data Transfer

Source Server         : qq
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : myproject

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:09:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `userid` int(6) DEFAULT NULL,
  `goodsid` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `number` int(3) DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('1', '0', '3', '49.90', '5', '', '', '../images/goodlist/g3.jpg', '印尼进口 Danisa 皇冠 丹麦 曲奇 454g（新旧包装随机发货） 盒装', '2018-01-08 09:09:07');
INSERT INTO `carlist` VALUES ('4', '0', '2', '79.80', '5', '', '', '../images/goodlist/g2.jpg', '【超值抢】智利车厘子2斤果径26-28mm', '2018-01-08 09:09:07');
INSERT INTO `carlist` VALUES ('5', '0', '11', '88.00', '1', '', '', '../images/goodlist/g11.jpg', '崇鲜 挪威进口冰鲜三文鱼刺身 400g 盒装 生鱼片 海鲜水产', '2018-01-08 11:02:40');

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `details` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `size` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '奥地利进口 绿林贝超高温灭菌脱脂纯牛奶1L*6 进口食品', '46.00', null, '../images/goodlist/g1.jpg', '2018-01-05 19:59:48', '奥地利进口 绿林贝超高温灭菌脱脂纯牛奶1L*6 进口食品', 'gselect', null);
INSERT INTO `goodlist` VALUES ('2', '车厘子', '79.80', null, '../images/goodlist/g2.jpg', '2018-01-05 19:59:55', '【超值抢】智利车厘子2斤果径26-28mm', 'gselect', null);
INSERT INTO `goodlist` VALUES ('3', '丹麦曲奇', '49.90', null, '../images/goodlist/g3.jpg', '2018-01-05 20:01:49', '印尼进口 Danisa 皇冠 丹麦 曲奇 454g（新旧包装随机发货） 盒装', 'gselect', null);
INSERT INTO `goodlist` VALUES ('4', '绅士牌坚果', '118.00', null, '../images/goodlist/g4.jpg', '2018-01-05 20:01:56', '美国进口 绅士牌(Planters)精选大罐混合坚果（腰果、巴旦木、碧根果、巴西果、榛子）963g', 'gselect', null);
INSERT INTO `goodlist` VALUES ('5', '面膜', '88.00', null, '../images/goodlist/g5.jpg', '2018-01-05 20:02:49', '【新晋网红】养生堂 桦树汁补水保湿面膜 24ml/片*5片 日本原装进口 天然补水不用水', 'gselect', null);
INSERT INTO `goodlist` VALUES ('6', '理肤泉', '119.00', null, '../images/goodlist/g6.jpg', '2018-01-05 20:03:53', '【满299减50】理肤泉(LA ROCHE-POSAY)B5多效修复霜40ml（B5万能霜 祛痘淡印修护补水保湿面霜）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('7', '植村秀', '56.00', null, '../images/goodlist/g7.jpg', '2018-01-05 20:04:50', '【599减100】植村秀（Shu-uemura）经典保湿洁颜油 50ml（卸妆）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('8', '依云', '118.00', null, '../images/goodlist/g8.jpg', '2018-01-05 20:05:50', '依云（evian）喷雾300ml*2（又名：依云矿泉水喷雾闺蜜分享装300ml*2）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('9', '资生堂', '98.00', null, '../images/goodlist/g9.jpg', '2018-01-05 20:07:25', '【2件7折】资生堂丝蓓绮（TSUBAKI）滢艳精纯倍护 洗发露 450ml （日本原装进口无硅油洗发水）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('10', '优诗诗', '42.90', null, '../images/goodlist/g10.jpg', '2018-01-05 20:08:37', '日本进口 优诗诗（UCC）速溶咖啡117号90g', 'gselect', null);
INSERT INTO `goodlist` VALUES ('11', '三文鱼', '88.00', null, '../images/goodlist/g11.jpg', '2018-01-05 20:09:37', '崇鲜 挪威进口冰鲜三文鱼刺身 400g 盒装 生鱼片 海鲜水产', 'gselect', null);
INSERT INTO `goodlist` VALUES ('12', '宝伊莱', '49.90', null, '../images/goodlist/g12.jpg', '2018-01-05 20:10:49', '海外直采 宝伊徕（Poyraz）特级初榨橄榄油 土耳其原装进口 1000ml', 'gselect', null);
INSERT INTO `goodlist` VALUES ('13', '泰国香米', '109.00', null, '../images/goodlist/g13.jpg', '2018-01-05 20:11:44', '【立减20】泰国进口 湄南河 泰米 泰国茉莉香米10kg', 'gselect', null);
INSERT INTO `goodlist` VALUES ('14', '李施德林', '79.90', null, '../images/goodlist/g14.jpg', '2018-01-05 20:12:35', '李施德林（Listerine）漱口水冰蓝口味500ml三包装+赠品冰蓝80ml*2（泰国进口）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('15', '拉菲', '79.00', null, '../images/goodlist/g15.jpg', '2018-01-05 20:13:38', '法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒 750ml（ASC）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('16', '雀巢', '262.00', null, '../images/goodlist/g16.jpg', '2018-01-05 20:14:30', '雀巢（nestle）超级能恩 幼儿配方奶粉 3段（12-36个月适用）800克（德国原装进口）（新老包装随机发货）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('17', '家耐优', '39.90', null, '../images/goodlist/g17.jpg', '2018-01-05 20:15:18', '【3件6折】家耐优 KANEYO 衣领净250ml/瓶(日本原装进口)', 'gselect', null);
INSERT INTO `goodlist` VALUES ('18', '尤妮佳', '106.00', null, '../images/goodlist/g18.jpg', '2018-01-05 20:16:18', '尤妮佳（Moony）纸尿裤 L68片（9-14kg）大号婴儿尿不湿（官方进口）', 'gselect', null);
INSERT INTO `goodlist` VALUES ('19', '哈罗闪', '79.00', null, '../images/goodlist/g19.jpg', '2018-01-05 20:17:03', '【满199减50】哈罗闪（sanosan）婴儿柔润护肤乳200ml 宝宝润肤乳儿童身体乳 德国原装进口', 'gselect', null);
INSERT INTO `goodlist` VALUES ('20', '巧克力', '79.00', null, '../images/goodlist/jk2.jpg', '2018-01-05 20:24:22', '德国进口 knoppers 牛奶巧克力榛子威化饼干 600g', 'infood', null);
INSERT INTO `goodlist` VALUES ('21', '丹麦曲奇', '105.00', null, '../images/goodlist/jk3.jpg', '2018-01-05 20:24:28', '丹麦进口 皇冠（danisa）丹麦曲奇精选礼盒装908g(丹麦版红蓝包装随机发货)', 'infood', null);
INSERT INTO `goodlist` VALUES ('22', '紫菜', '14.80', null, '../images/goodlist/jk4.jpg', '2018-01-05 20:25:48', '泰国进口 休闲零食 小老板 烤海苔卷 脆紫菜卷 原味 32.4g/盒（新老包装随机发货）', 'infood', null);
INSERT INTO `goodlist` VALUES ('23', '橄榄油', '145.00', null, '../images/goodlist/jk5.jpg', '2018-01-05 20:26:36', '西班牙进口 爱彼诺  特级初榨橄榄油 3L 食用油', 'infood', null);
INSERT INTO `goodlist` VALUES ('24', '泰国香米', '79.90', null, '../images/goodlist/jk6.jpg', '2018-01-05 20:29:26', '孟乍隆苏吝府茉莉香米 泰米 泰国香米 大米 非东北米5KG', 'infood_s', null);
INSERT INTO `goodlist` VALUES ('25', '万多福', '84.90', null, '../images/goodlist/jk7.jpg', '2018-01-05 20:29:22', '美国进口 万多福（Wonderful）加州开心果 经典盐焗味454g 坚果零食', 'infood_s', null);
INSERT INTO `goodlist` VALUES ('26', 'loacker', '29.80', null, '../images/goodlist/jk8.jpg', '2018-01-05 20:31:02', '奥地利进口 loacker 莱家 粒粒装 威化 榛子味 250g 袋装', 'infood_s', null);

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('1', 'aaa', '1234567', null);
INSERT INTO `userlist` VALUES ('2', 'bbb', '111111', null);
INSERT INTO `userlist` VALUES ('3', 'ccc', '111', null);
INSERT INTO `userlist` VALUES ('4', 'asdf', 'adadf', '12312345612');
INSERT INTO `userlist` VALUES ('5', 'asdf', 'adadf', '12312345612');
INSERT INTO `userlist` VALUES ('6', 'asdf', 'adadf', '12312345612');
INSERT INTO `userlist` VALUES ('7', 'asdf', 'adadhlh', '12312345612');
INSERT INTO `userlist` VALUES ('8', 'asdf', 'adadhlh', '12312345612');
INSERT INTO `userlist` VALUES ('9', 'asdf', 'adadhlh', '12312345612');
INSERT INTO `userlist` VALUES ('10', 'asdf', 'adadhlh', '12312345612');
INSERT INTO `userlist` VALUES ('11', 'sdfg', 'ed2361b5eb079ed7512e026706ed0867', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('12', 'sdfg', 'ed2361b5eb079ed7512e026706ed0867', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('13', 'sdfg', '37a91a2ac2a7cfa06adcc0c1a636243c', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('14', 'sdfg', '37a91a2ac2a7cfa06adcc0c1a636243c', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('15', 'sdfg', '37a91a2ac2a7cfa06adcc0c1a636243c', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('16', 'sdfg', '37a91a2ac2a7cfa06adcc0c1a636243c', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('17', 'wewfg', 'a152e841783914146e4bcd4f39100686', 'd3d8457f961e8b2c7575479cad26a8ca');
INSERT INTO `userlist` VALUES ('18', 'wewfg', 'a152e841783914146e4bcd4f39100686', 'd3d8457f961e8b2c7575479cad26a8ca');
INSERT INTO `userlist` VALUES ('19', 'adadf', 'a152e841783914146e4bcd4f39100686', '040926f4eb8ab985109bd0bbfd6edc65');
INSERT INTO `userlist` VALUES ('20', 'adadf', 'a152e841783914146e4bcd4f39100686', '040926f4eb8ab985109bd0bbfd6edc65');
INSERT INTO `userlist` VALUES ('21', 'adadf', 'a152e841783914146e4bcd4f39100686', '040926f4eb8ab985109bd0bbfd6edc65');
INSERT INTO `userlist` VALUES ('22', 'adadf', 'a152e841783914146e4bcd4f39100686', '040926f4eb8ab985109bd0bbfd6edc65');
INSERT INTO `userlist` VALUES ('23', 'qwert', 'a152e841783914146e4bcd4f39100686', '3daab72480edd9bfb51dc9b9c039ed69');
INSERT INTO `userlist` VALUES ('24', 'qwert', 'a152e841783914146e4bcd4f39100686', '3daab72480edd9bfb51dc9b9c039ed69');
INSERT INTO `userlist` VALUES ('25', 'wqerwtt', 'eed8cdc400dfd4ec85dff70a170066b7', 'b92f6bdb819a9163b384bce8a8b4604f');
INSERT INTO `userlist` VALUES ('26', 'sdfg', '37a91a2ac2a7cfa06adcc0c1a636243c', 'ab82203fb8e4cc71f9c156ea7159741a');
INSERT INTO `userlist` VALUES ('27', 'afsgdgfd', 'b9d1424e1611de6c8a3a5db146866884', 'cb0324795cfe9425d0ccb813f482eff4');
INSERT INTO `userlist` VALUES ('28', 'qqqq', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', '3f06fea6624f8db8142764ee68162500');
SET FOREIGN_KEY_CHECKS=1;
