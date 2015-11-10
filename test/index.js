var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  //ARGUMENTS
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  //ARRAY
  describe('is.array', function () {
    it('should return true if passed parameter type is array', function () {
      expect(is.array(['value1', 'value2'])).to.be.true;
    });
    it("should return false if passed parameter type is not array", function () {
      expect(is.array('Yann')).to.be.false;
    });
  });
  //BOOLEAN
  describe('is.boolean', function() {
    it('should return true if passed parameter type is boolean', function () {
      expect(is.boolean(true)).to.be.true;
    });
    it('should return false if passed parameter type is not boolean', function () {
      expect(is.boolean('text')).to.be.false;
    });
  });
    //DATE
    describe('is.date', function() {
      it('should return true if passed parameter type is date', function () {
        expect(is.date(new Date())).to.be.true;
      });
      it('should return false if passed parameter type is not date', function () {
        expect(is.date('text')).to.be.false;
      });
  });
  //ERROR
  describe('is.error', function() {
    it('should return true if passed parameter type is error', function () {
      expect(is.error(new Error())).to.be.true;
    });
    it('should return false if passed parameter type is not error', function () {
      expect(is.error('text')).to.be.false;
    });
  });
  //FUNCTION
  describe('is.function', function() {
    it('should return true if passed parameter type is function', function () {
      expect(is.function(new Function())).to.be.true;
    });
    it('should return false if passed parameter type is not function', function () {
      expect(is.function('text')).to.be.false;
    });
  });
  //NAN
  describe('is.nan', function() {
    it('should return true if passed parameter type is NaN', function () {
      expect(is.nan(NaN)).to.be.true;
    });
    it('should return false if passed parameter type is not NaN', function () {
      expect(is.nan(123)).to.be.false;
    });
  });
  //NULL
  describe('is.null', function() {
    it('should return true if passed parameter type is null', function () {
      expect(is.null(null)).to.be.true;
    });
    it('should return false if passed parameter type is not null', function () {
      expect(is.null(123)).to.be.false;
    });
  });
  //NUMBER
  describe('is.number', function() {
    it('should return true if passed parameter type is number', function () {
      expect(is.number(123)).to.be.true;
    });
    it('should return false if passed parameter type is not number', function () {
      expect(is.number('ok')).to.be.false;
    });
  });
  //OBJECT
  describe('is.object', function() {
    it('should return true if passed parameter type is object', function () {
      expect(is.object(new Object())).to.be.true;
    });
    it('should return false if passed parameter type is not object', function () {
      expect(is.object('ok')).to.be.false;
    });
  });
  //JSON
  describe('is.json', function() {
    it('should return true if passed parameter type is json', function () {
      expect(is.json({})).to.be.true;
    });
    it('should return false if passed parameter type is not json', function () {
      expect(is.json(123)).to.be.false;
    });
  });
  //REGEXP
  describe('is.regexp', function() {
    it('should return true if passed parameter type is regexp', function () {
      expect(is.regexp(/\w/g)).to.be.true;
    });
    it('should return false if passed parameter type is not regexp', function () {
      expect(is.regexp('ok')).to.be.false;
    });
  });
  //SAMETYPE
  describe('is.sameType', function() {
    it('should return true if passed parameter type is sameType', function () {
      expect(is.sameType(true,false)).to.be.true;
    });
    it('should return false if passed parameter type is not sameType', function () {
      expect(is.sameType('ok', 123)).to.be.false;
    });
  });
  //STRING
  describe('is.string', function() {
    it('should return true if passed parameter type is string', function () {
      expect(is.string('text')).to.be.true;
    });
    it('should return false if passed parameter type is not string', function () {
      expect(is.string(true)).to.be.false;
    });
  });
  //CHAR
  describe('is.char', function() {
    it('should return true if passed parameter type is char', function () {
      expect(is.char('a')).to.be.true;
    });
    it('should return false if passed parameter type is not char', function () {
      expect(is.char('ok')).to.be.false;
    });
  });
  //UNDEFINED
  describe('is.undefined', function() {
    it('should return true if passed parameter type is undefined', function () {
      expect(is.undefined(undefined)).to.be.true;
    });
    it('should return false if passed parameter type is not undefined', function () {
      expect(is.undefined('ok')).to.be.false;
    });
  });
  //EMPTY
  describe('is.empty', function() {
    it('should return true if passed parameter type is empty', function () {
      expect(is.empty('')).to.be.true;
    });
    it('should return false if passed parameter type is not empty', function () {
      expect(is.empty('ok')).to.be.false;
    });
  });
  //EXISTY
  describe('is.existy', function() {
    it('should return true if passed parameter type is existy', function () {
      expect(is.existy('a')).to.be.true;
    });
    it('should return false if passed parameter type is not existy', function () {
      expect(is.existy(null)).to.be.false;
    });
  });
  //TRUTHY
  describe('is.truthy', function() {
    it('should return true if passed parameter type is truthy', function () {
      expect(is.truthy(true)).to.be.true;
    });
    it('should return false if passed parameter type is not truthy', function () {
      expect(is.truthy(false)).to.be.false;
    });
  });
  //SPACE
  describe('is.space', function() {
    it('should return true if passed parameter type is space', function () {
      expect(is.space(' ')).to.be.true;
    });
    it('should return false if passed parameter type is not space', function () {
      expect(is.space('ok')).to.be.false;
    });
  });

  //POSITIVE
  describe('is.positive', function() {
    it('should return true if passed parameter type is positive', function () {
      expect(is.positive(1)).to.be.true;
    });
    it('should return false if passed parameter type is not positive', function () {
      expect(is.positive(-1)).to.be.false;
    });
  });
  //NEGATIVE
  describe('is.negative', function() {
    it('should return true if passed parameter type is negative', function () {
      expect(is.negative(-1)).to.be.true;
    });
    it('should return false if passed parameter type is not negative', function () {
      expect(is.negative(1)).to.be.false;
    });
  });

  //DECIMAL
  describe('is.decimal', function() {
    it('should return true if passed parameter type is decimal', function () {
      expect(is.decimal(5.5)).to.be.true;
    });
    it('should return false if passed parameter type is not decimal', function () {
      expect(is.decimal(5)).to.be.false;
    });
  });
  //INTEGER
  describe('is.integer', function() {
    it('should return true if passed parameter type is integer', function () {
      expect(is.integer(5)).to.be.true;
    });
    it('should return false if passed parameter type is not integer', function () {
      expect(is.integer(5.5)).to.be.false;
    });
  });

//END
});
