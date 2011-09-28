goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2084 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2084))
{return or__3548__auto____2084;
} else
{var or__3548__auto____2085 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2085))
{return or__3548__auto____2085;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2086 = coll;

if(cljs.core.truth_(and__3546__auto____2086))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2086;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2087 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2087))
{return or__3548__auto____2087;
} else
{var or__3548__auto____2088 = (_count["_"]);

if(cljs.core.truth_(or__3548__auto____2088))
{return or__3548__auto____2088;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2089 = coll;

if(cljs.core.truth_(and__3546__auto____2089))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2089;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2090 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2090))
{return or__3548__auto____2090;
} else
{var or__3548__auto____2091 = (_empty["_"]);

if(cljs.core.truth_(or__3548__auto____2091))
{return or__3548__auto____2091;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2092 = coll;

if(cljs.core.truth_(and__3546__auto____2092))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2092;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2093 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2093))
{return or__3548__auto____2093;
} else
{var or__3548__auto____2094 = (_conj["_"]);

if(cljs.core.truth_(or__3548__auto____2094))
{return or__3548__auto____2094;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2101 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2095 = coll;

if(cljs.core.truth_(and__3546__auto____2095))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2095;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2096 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2096))
{return or__3548__auto____2096;
} else
{var or__3548__auto____2097 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2097))
{return or__3548__auto____2097;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2102 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2098 = coll;

if(cljs.core.truth_(and__3546__auto____2098))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2098;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2099 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2099))
{return or__3548__auto____2099;
} else
{var or__3548__auto____2100 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2100))
{return or__3548__auto____2100;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2101.call(this,coll,n);
case  3 :
return _nth__2102.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2104 = coll;

if(cljs.core.truth_(and__3546__auto____2104))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2104;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2105 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2105))
{return or__3548__auto____2105;
} else
{var or__3548__auto____2106 = (_first["_"]);

if(cljs.core.truth_(or__3548__auto____2106))
{return or__3548__auto____2106;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2107 = coll;

if(cljs.core.truth_(and__3546__auto____2107))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2107;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2108 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2108))
{return or__3548__auto____2108;
} else
{var or__3548__auto____2109 = (_rest["_"]);

if(cljs.core.truth_(or__3548__auto____2109))
{return or__3548__auto____2109;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2116 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2110 = o;

if(cljs.core.truth_(and__3546__auto____2110))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2110;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2111 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2111))
{return or__3548__auto____2111;
} else
{var or__3548__auto____2112 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2112))
{return or__3548__auto____2112;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2117 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2113 = o;

if(cljs.core.truth_(and__3546__auto____2113))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2113;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2114 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2114))
{return or__3548__auto____2114;
} else
{var or__3548__auto____2115 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2115))
{return or__3548__auto____2115;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2116.call(this,o,k);
case  3 :
return _lookup__2117.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2119 = coll;

if(cljs.core.truth_(and__3546__auto____2119))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2119;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2120 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2120))
{return or__3548__auto____2120;
} else
{var or__3548__auto____2121 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2121))
{return or__3548__auto____2121;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2122 = coll;

if(cljs.core.truth_(and__3546__auto____2122))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2122;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2123 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2123))
{return or__3548__auto____2123;
} else
{var or__3548__auto____2124 = (_assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2124))
{return or__3548__auto____2124;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2125 = coll;

if(cljs.core.truth_(and__3546__auto____2125))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2125;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2126 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2126))
{return or__3548__auto____2126;
} else
{var or__3548__auto____2127 = (_dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2127))
{return or__3548__auto____2127;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2128 = coll;

if(cljs.core.truth_(and__3546__auto____2128))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2128;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2129 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2129))
{return or__3548__auto____2129;
} else
{var or__3548__auto____2130 = (_disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2130))
{return or__3548__auto____2130;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2131 = coll;

if(cljs.core.truth_(and__3546__auto____2131))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2131;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2132 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2132))
{return or__3548__auto____2132;
} else
{var or__3548__auto____2133 = (_peek["_"]);

if(cljs.core.truth_(or__3548__auto____2133))
{return or__3548__auto____2133;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2134 = coll;

if(cljs.core.truth_(and__3546__auto____2134))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2134;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2135 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2135))
{return or__3548__auto____2135;
} else
{var or__3548__auto____2136 = (_pop["_"]);

if(cljs.core.truth_(or__3548__auto____2136))
{return or__3548__auto____2136;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2137 = coll;

if(cljs.core.truth_(and__3546__auto____2137))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2137;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2138 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2138))
{return or__3548__auto____2138;
} else
{var or__3548__auto____2139 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2139))
{return or__3548__auto____2139;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2140 = o;

if(cljs.core.truth_(and__3546__auto____2140))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2140;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2141 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2141))
{return or__3548__auto____2141;
} else
{var or__3548__auto____2142 = (_deref["_"]);

if(cljs.core.truth_(or__3548__auto____2142))
{return or__3548__auto____2142;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2143 = o;

if(cljs.core.truth_(and__3546__auto____2143))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2143;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2144 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2144))
{return or__3548__auto____2144;
} else
{var or__3548__auto____2145 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2145))
{return or__3548__auto____2145;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2146 = o;

if(cljs.core.truth_(and__3546__auto____2146))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2146;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2147 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2147))
{return or__3548__auto____2147;
} else
{var or__3548__auto____2148 = (_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2148))
{return or__3548__auto____2148;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2149 = o;

if(cljs.core.truth_(and__3546__auto____2149))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2149;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2150 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2150))
{return or__3548__auto____2150;
} else
{var or__3548__auto____2151 = (_with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2151))
{return or__3548__auto____2151;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2158 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2152 = coll;

if(cljs.core.truth_(and__3546__auto____2152))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2152;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2153 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2153))
{return or__3548__auto____2153;
} else
{var or__3548__auto____2154 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2154))
{return or__3548__auto____2154;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2159 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2155 = coll;

if(cljs.core.truth_(and__3546__auto____2155))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2155;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2156 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2156))
{return or__3548__auto____2156;
} else
{var or__3548__auto____2157 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2157))
{return or__3548__auto____2157;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2158.call(this,coll,f);
case  3 :
return _reduce__2159.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2161 = o;

if(cljs.core.truth_(and__3546__auto____2161))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2161;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2162 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2162))
{return or__3548__auto____2162;
} else
{var or__3548__auto____2163 = (_equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2163))
{return or__3548__auto____2163;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2164 = o;

if(cljs.core.truth_(and__3546__auto____2164))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2164;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2165 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2165))
{return or__3548__auto____2165;
} else
{var or__3548__auto____2166 = (_hash["_"]);

if(cljs.core.truth_(or__3548__auto____2166))
{return or__3548__auto____2166;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2167 = o;

if(cljs.core.truth_(and__3546__auto____2167))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2167;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2168 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2168))
{return or__3548__auto____2168;
} else
{var or__3548__auto____2169 = (_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2169))
{return or__3548__auto____2169;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2170 = o;

if(cljs.core.truth_(and__3546__auto____2170))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2170;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2171 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2171))
{return or__3548__auto____2171;
} else
{var or__3548__auto____2172 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2172))
{return or__3548__auto____2172;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2173 = d;

if(cljs.core.truth_(and__3546__auto____2173))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2173;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2174 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2174))
{return or__3548__auto____2174;
} else
{var or__3548__auto____2175 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2175))
{return or__3548__auto____2175;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2176 = null;
var G__2176__2177 = (function (_,n){
return null;
});
var G__2176__2178 = (function (_,n,not_found){
return not_found;
});
G__2176 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2176__2177.call(this,_,n);
case  3 :
return G__2176__2178.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2176;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2180 = null;
var G__2180__2181 = (function (_,f){
return f.call(null);
});
var G__2180__2182 = (function (_,f,start){
return start;
});
G__2180 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2180__2181.call(this,_,f);
case  3 :
return G__2180__2182.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2180;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2184 = null;
var G__2184__2185 = (function (o,k){
return null;
});
var G__2184__2186 = (function (o,k,not_found){
return not_found;
});
G__2184 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2184__2185.call(this,o,k);
case  3 :
return G__2184__2186.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2184;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2194 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2188 = cljs.core._nth.call(null,cicoll,0);
var n__2189 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2189,cljs.core._count.call(null,cicoll))))
{{
var G__2198 = f.call(null,val__2188,cljs.core._nth.call(null,cicoll,n__2189));
var G__2199 = cljs.core.inc.call(null,n__2189);
val__2188 = G__2198;
n__2189 = G__2199;
continue;
}
} else
{return val__2188;
}
break;
}
}
});
var ci_reduce__2195 = (function (cicoll,f,val){
var val__2190 = val;
var n__2191 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2191,cljs.core._count.call(null,cicoll))))
{{
var G__2200 = f.call(null,val__2190,cljs.core._nth.call(null,cicoll,n__2191));
var G__2201 = cljs.core.inc.call(null,n__2191);
val__2190 = G__2200;
n__2191 = G__2201;
continue;
}
} else
{return val__2190;
}
break;
}
});
var ci_reduce__2196 = (function (cicoll,f,val,idx){
var val__2192 = val;
var n__2193 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2193,cljs.core._count.call(null,cicoll))))
{{
var G__2202 = f.call(null,val__2192,cljs.core._nth.call(null,cicoll,n__2193));
var G__2203 = cljs.core.inc.call(null,n__2193);
val__2192 = G__2202;
n__2193 = G__2203;
continue;
}
} else
{return val__2192;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2194.call(this,cicoll,f);
case  3 :
return ci_reduce__2195.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2196.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2211 = null;
var G__2211__2212 = (function (coll,f){
var this__2204 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2204.a[this__2204.i]),cljs.core.inc.call(null,this__2204.i));
});
var G__2211__2213 = (function (coll,f,start){
var this__2205 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2205.i);
});
G__2211 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2211__2212.call(this,coll,f);
case  3 :
return G__2211__2213.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2211;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2206 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2207 = this;
return this__2207.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2208 = this;
return (this__2208.a[this__2208.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2209 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2209.i),this__2209.a.length)))
{return (new cljs.core.IndexedSeq(this__2209.a,cljs.core.inc.call(null,this__2209.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2210 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2215 = null;
var G__2215__2216 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2215__2217 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2215 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2215__2216.call(this,array,f);
case  3 :
return G__2215__2217.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2215;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2219 = null;
var G__2219__2220 = (function (array,k){
return (array[k]);
});
var G__2219__2221 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2219 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2219__2220.call(this,array,k);
case  3 :
return G__2219__2221.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2219;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2223 = null;
var G__2223__2224 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2223__2225 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2223 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2223__2224.call(this,array,n);
case  3 :
return G__2223__2225.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2223;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2227))
{var s__2228 = temp__3698__auto____2227;

return cljs.core._first.call(null,s__2228);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2229 = cljs.core.next.call(null,s);
s = G__2229;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2230 = cljs.core.seq.call(null,x);
var n__2231 = 0;

while(true){
if(cljs.core.truth_(s__2230))
{{
var G__2232 = cljs.core.next.call(null,s__2230);
var G__2233 = cljs.core.inc.call(null,n__2231);
s__2230 = G__2232;
n__2231 = G__2233;
continue;
}
} else
{return n__2231;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2234 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2235 = (function() { 
var G__2237__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2238 = conj.call(null,coll,x);
var G__2239 = cljs.core.first.call(null,xs);
var G__2240 = cljs.core.next.call(null,xs);
coll = G__2238;
x = G__2239;
xs = G__2240;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2237 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2237__delegate.call(this, coll, x, xs);
};
G__2237.cljs$lang$maxFixedArity = 2;
G__2237.cljs$lang$applyTo = (function (arglist__2241){
var coll = cljs.core.first(arglist__2241);
var x = cljs.core.first(cljs.core.next(arglist__2241));
var xs = cljs.core.rest(cljs.core.next(arglist__2241));
return G__2237__delegate.call(this, coll, x, xs);
});
return G__2237;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2234.call(this,coll,x);
default:
return conj__2235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2235.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2242 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2243 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2242.call(this,coll,n);
case  3 :
return nth__2243.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2245 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2246 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2245.call(this,o,k);
case  3 :
return get__2246.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2249 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2250 = (function() { 
var G__2252__delegate = function (coll,k,v,kvs){
while(true){
var ret__2248 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2253 = ret__2248;
var G__2254 = cljs.core.first.call(null,kvs);
var G__2255 = cljs.core.second.call(null,kvs);
var G__2256 = cljs.core.nnext.call(null,kvs);
coll = G__2253;
k = G__2254;
v = G__2255;
kvs = G__2256;
continue;
}
} else
{return ret__2248;
}
break;
}
};
var G__2252 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2252__delegate.call(this, coll, k, v, kvs);
};
G__2252.cljs$lang$maxFixedArity = 3;
G__2252.cljs$lang$applyTo = (function (arglist__2257){
var coll = cljs.core.first(arglist__2257);
var k = cljs.core.first(cljs.core.next(arglist__2257));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2257)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2257)));
return G__2252__delegate.call(this, coll, k, v, kvs);
});
return G__2252;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2249.call(this,coll,k,v);
default:
return assoc__2250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2250.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2259 = (function (coll){
return coll;
});
var dissoc__2260 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2261 = (function() { 
var G__2263__delegate = function (coll,k,ks){
while(true){
var ret__2258 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2264 = ret__2258;
var G__2265 = cljs.core.first.call(null,ks);
var G__2266 = cljs.core.next.call(null,ks);
coll = G__2264;
k = G__2265;
ks = G__2266;
continue;
}
} else
{return ret__2258;
}
break;
}
};
var G__2263 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2263__delegate.call(this, coll, k, ks);
};
G__2263.cljs$lang$maxFixedArity = 2;
G__2263.cljs$lang$applyTo = (function (arglist__2267){
var coll = cljs.core.first(arglist__2267);
var k = cljs.core.first(cljs.core.next(arglist__2267));
var ks = cljs.core.rest(cljs.core.next(arglist__2267));
return G__2263__delegate.call(this, coll, k, ks);
});
return G__2263;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2259.call(this,coll);
case  2 :
return dissoc__2260.call(this,coll,k);
default:
return dissoc__2261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2261.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__163__auto____2268 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2269 = x__163__auto____2268;

if(cljs.core.truth_(and__3546__auto____2269))
{return x__163__auto____2268.cljs$core$IMeta$;
} else
{return and__3546__auto____2269;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__163__auto____2268);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2271 = (function (coll){
return coll;
});
var disj__2272 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2273 = (function() { 
var G__2275__delegate = function (coll,k,ks){
while(true){
var ret__2270 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2276 = ret__2270;
var G__2277 = cljs.core.first.call(null,ks);
var G__2278 = cljs.core.next.call(null,ks);
coll = G__2276;
k = G__2277;
ks = G__2278;
continue;
}
} else
{return ret__2270;
}
break;
}
};
var G__2275 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2275__delegate.call(this, coll, k, ks);
};
G__2275.cljs$lang$maxFixedArity = 2;
G__2275.cljs$lang$applyTo = (function (arglist__2279){
var coll = cljs.core.first(arglist__2279);
var k = cljs.core.first(cljs.core.next(arglist__2279));
var ks = cljs.core.rest(cljs.core.next(arglist__2279));
return G__2275__delegate.call(this, coll, k, ks);
});
return G__2275;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2271.call(this,coll);
case  2 :
return disj__2272.call(this,coll,k);
default:
return disj__2273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2273.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2280 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2281 = x__163__auto____2280;

if(cljs.core.truth_(and__3546__auto____2281))
{return x__163__auto____2280.cljs$core$ICollection$;
} else
{return and__3546__auto____2281;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__163__auto____2280);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2282 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2283 = x__163__auto____2282;

if(cljs.core.truth_(and__3546__auto____2283))
{return x__163__auto____2282.cljs$core$ISet$;
} else
{return and__3546__auto____2283;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__163__auto____2282);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__163__auto____2284 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2285 = x__163__auto____2284;

if(cljs.core.truth_(and__3546__auto____2285))
{return x__163__auto____2284.cljs$core$IAssociative$;
} else
{return and__3546__auto____2285;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__163__auto____2284);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__163__auto____2286 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2287 = x__163__auto____2286;

if(cljs.core.truth_(and__3546__auto____2287))
{return x__163__auto____2286.cljs$core$ISequential$;
} else
{return and__3546__auto____2287;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__163__auto____2286);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__163__auto____2288 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2289 = x__163__auto____2288;

if(cljs.core.truth_(and__3546__auto____2289))
{return x__163__auto____2288.cljs$core$ICounted$;
} else
{return and__3546__auto____2289;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__163__auto____2288);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__163__auto____2290 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2291 = x__163__auto____2290;

if(cljs.core.truth_(and__3546__auto____2291))
{return x__163__auto____2290.cljs$core$IMap$;
} else
{return and__3546__auto____2291;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__163__auto____2290);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__163__auto____2292 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2293 = x__163__auto____2292;

if(cljs.core.truth_(and__3546__auto____2293))
{return x__163__auto____2292.cljs$core$IVector$;
} else
{return and__3546__auto____2293;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__163__auto____2292);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2294 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2294.push(key);
}));
return keys__2294;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__163__auto____2295 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2296 = x__163__auto____2295;

if(cljs.core.truth_(and__3546__auto____2296))
{return x__163__auto____2295.cljs$core$ISeq$;
} else
{return and__3546__auto____2296;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__163__auto____2295);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2297 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2297))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2298 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2298))
{return or__3548__auto____2298;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2297;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2299 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2299))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2299;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2300 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2300))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2300;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2301 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2301))
{return (n == n.toFixed());
} else
{return and__3546__auto____2301;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2302 = coll;

if(cljs.core.truth_(and__3546__auto____2302))
{var and__3546__auto____2303 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2303))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2303;
}
} else
{return and__3546__auto____2302;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2308 = (function (x){
return true;
});
var distinct_QMARK___2309 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2310 = (function() { 
var G__2312__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2304 = cljs.core.set([y,x]);
var xs__2305 = more;

while(true){
var x__2306 = cljs.core.first.call(null,xs__2305);
var etc__2307 = cljs.core.next.call(null,xs__2305);

if(cljs.core.truth_(xs__2305))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2304,x__2306)))
{return false;
} else
{{
var G__2313 = cljs.core.conj.call(null,s__2304,x__2306);
var G__2314 = etc__2307;
s__2304 = G__2313;
xs__2305 = G__2314;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2312__delegate.call(this, x, y, more);
};
G__2312.cljs$lang$maxFixedArity = 2;
G__2312.cljs$lang$applyTo = (function (arglist__2315){
var x = cljs.core.first(arglist__2315);
var y = cljs.core.first(cljs.core.next(arglist__2315));
var more = cljs.core.rest(cljs.core.next(arglist__2315));
return G__2312__delegate.call(this, x, y, more);
});
return G__2312;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2308.call(this,x);
case  2 :
return distinct_QMARK___2309.call(this,x,y);
default:
return distinct_QMARK___2310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2310.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2316 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2316)))
{return r__2316;
} else
{if(cljs.core.truth_(r__2316))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2318 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2319 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2317 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2317,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2317);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2318.call(this,comp);
case  2 :
return sort__2319.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2321 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2322 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2321.call(this,keyfn,comp);
case  3 :
return sort_by__2322.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2324 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2325 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2324.call(this,f,val);
case  3 :
return reduce__2325.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2331 = (function (f,coll){
var temp__3695__auto____2327 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2327))
{var s__2328 = temp__3695__auto____2327;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2328),cljs.core.next.call(null,s__2328));
} else
{return f.call(null);
}
});
var seq_reduce__2332 = (function (f,val,coll){
var val__2329 = val;
var coll__2330 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2330))
{{
var G__2334 = f.call(null,val__2329,cljs.core.first.call(null,coll__2330));
var G__2335 = cljs.core.next.call(null,coll__2330);
val__2329 = G__2334;
coll__2330 = G__2335;
continue;
}
} else
{return val__2329;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2331.call(this,f,val);
case  3 :
return seq_reduce__2332.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2336 = null;
var G__2336__2337 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2336__2338 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2336 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2336__2337.call(this,coll,f);
case  3 :
return G__2336__2338.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2336;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2340 = (function (){
return 0;
});
var _PLUS___2341 = (function (x){
return x;
});
var _PLUS___2342 = (function (x,y){
return (x + y);
});
var _PLUS___2343 = (function() { 
var G__2345__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2345__delegate.call(this, x, y, more);
};
G__2345.cljs$lang$maxFixedArity = 2;
G__2345.cljs$lang$applyTo = (function (arglist__2346){
var x = cljs.core.first(arglist__2346);
var y = cljs.core.first(cljs.core.next(arglist__2346));
var more = cljs.core.rest(cljs.core.next(arglist__2346));
return G__2345__delegate.call(this, x, y, more);
});
return G__2345;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2340.call(this);
case  1 :
return _PLUS___2341.call(this,x);
case  2 :
return _PLUS___2342.call(this,x,y);
default:
return _PLUS___2343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2343.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2347 = (function (x){
return (- x);
});
var ___2348 = (function (x,y){
return (x - y);
});
var ___2349 = (function() { 
var G__2351__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2351 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2351__delegate.call(this, x, y, more);
};
G__2351.cljs$lang$maxFixedArity = 2;
G__2351.cljs$lang$applyTo = (function (arglist__2352){
var x = cljs.core.first(arglist__2352);
var y = cljs.core.first(cljs.core.next(arglist__2352));
var more = cljs.core.rest(cljs.core.next(arglist__2352));
return G__2351__delegate.call(this, x, y, more);
});
return G__2351;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2347.call(this,x);
case  2 :
return ___2348.call(this,x,y);
default:
return ___2349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2349.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2353 = (function (){
return 1;
});
var _STAR___2354 = (function (x){
return x;
});
var _STAR___2355 = (function (x,y){
return (x * y);
});
var _STAR___2356 = (function() { 
var G__2358__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2358__delegate.call(this, x, y, more);
};
G__2358.cljs$lang$maxFixedArity = 2;
G__2358.cljs$lang$applyTo = (function (arglist__2359){
var x = cljs.core.first(arglist__2359);
var y = cljs.core.first(cljs.core.next(arglist__2359));
var more = cljs.core.rest(cljs.core.next(arglist__2359));
return G__2358__delegate.call(this, x, y, more);
});
return G__2358;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2353.call(this);
case  1 :
return _STAR___2354.call(this,x);
case  2 :
return _STAR___2355.call(this,x,y);
default:
return _STAR___2356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2356.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2360 = (function (x){
return (1 / x);
});
var _SLASH___2361 = (function (x,y){
return (x / y);
});
var _SLASH___2362 = (function() { 
var G__2364__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2364 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2364__delegate.call(this, x, y, more);
};
G__2364.cljs$lang$maxFixedArity = 2;
G__2364.cljs$lang$applyTo = (function (arglist__2365){
var x = cljs.core.first(arglist__2365);
var y = cljs.core.first(cljs.core.next(arglist__2365));
var more = cljs.core.rest(cljs.core.next(arglist__2365));
return G__2364__delegate.call(this, x, y, more);
});
return G__2364;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2360.call(this,x);
case  2 :
return _SLASH___2361.call(this,x,y);
default:
return _SLASH___2362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2362.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2366 = (function (x){
return true;
});
var _LT___2367 = (function (x,y){
return (x < y);
});
var _LT___2368 = (function() { 
var G__2370__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2371 = y;
var G__2372 = cljs.core.first.call(null,more);
var G__2373 = cljs.core.next.call(null,more);
x = G__2371;
y = G__2372;
more = G__2373;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2370__delegate.call(this, x, y, more);
};
G__2370.cljs$lang$maxFixedArity = 2;
G__2370.cljs$lang$applyTo = (function (arglist__2374){
var x = cljs.core.first(arglist__2374);
var y = cljs.core.first(cljs.core.next(arglist__2374));
var more = cljs.core.rest(cljs.core.next(arglist__2374));
return G__2370__delegate.call(this, x, y, more);
});
return G__2370;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2366.call(this,x);
case  2 :
return _LT___2367.call(this,x,y);
default:
return _LT___2368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2368.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2375 = (function (x){
return true;
});
var _LT__EQ___2376 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2377 = (function() { 
var G__2379__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2380 = y;
var G__2381 = cljs.core.first.call(null,more);
var G__2382 = cljs.core.next.call(null,more);
x = G__2380;
y = G__2381;
more = G__2382;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2379__delegate.call(this, x, y, more);
};
G__2379.cljs$lang$maxFixedArity = 2;
G__2379.cljs$lang$applyTo = (function (arglist__2383){
var x = cljs.core.first(arglist__2383);
var y = cljs.core.first(cljs.core.next(arglist__2383));
var more = cljs.core.rest(cljs.core.next(arglist__2383));
return G__2379__delegate.call(this, x, y, more);
});
return G__2379;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2375.call(this,x);
case  2 :
return _LT__EQ___2376.call(this,x,y);
default:
return _LT__EQ___2377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2377.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2384 = (function (x){
return true;
});
var _GT___2385 = (function (x,y){
return (x > y);
});
var _GT___2386 = (function() { 
var G__2388__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2389 = y;
var G__2390 = cljs.core.first.call(null,more);
var G__2391 = cljs.core.next.call(null,more);
x = G__2389;
y = G__2390;
more = G__2391;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2388__delegate.call(this, x, y, more);
};
G__2388.cljs$lang$maxFixedArity = 2;
G__2388.cljs$lang$applyTo = (function (arglist__2392){
var x = cljs.core.first(arglist__2392);
var y = cljs.core.first(cljs.core.next(arglist__2392));
var more = cljs.core.rest(cljs.core.next(arglist__2392));
return G__2388__delegate.call(this, x, y, more);
});
return G__2388;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2384.call(this,x);
case  2 :
return _GT___2385.call(this,x,y);
default:
return _GT___2386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2386.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2393 = (function (x){
return true;
});
var _GT__EQ___2394 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2395 = (function() { 
var G__2397__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2398 = y;
var G__2399 = cljs.core.first.call(null,more);
var G__2400 = cljs.core.next.call(null,more);
x = G__2398;
y = G__2399;
more = G__2400;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2397__delegate.call(this, x, y, more);
};
G__2397.cljs$lang$maxFixedArity = 2;
G__2397.cljs$lang$applyTo = (function (arglist__2401){
var x = cljs.core.first(arglist__2401);
var y = cljs.core.first(cljs.core.next(arglist__2401));
var more = cljs.core.rest(cljs.core.next(arglist__2401));
return G__2397__delegate.call(this, x, y, more);
});
return G__2397;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2393.call(this,x);
case  2 :
return _GT__EQ___2394.call(this,x,y);
default:
return _GT__EQ___2395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2395.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2402 = (function (x){
return x;
});
var max__2403 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2404 = (function() { 
var G__2406__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2406 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2406__delegate.call(this, x, y, more);
};
G__2406.cljs$lang$maxFixedArity = 2;
G__2406.cljs$lang$applyTo = (function (arglist__2407){
var x = cljs.core.first(arglist__2407);
var y = cljs.core.first(cljs.core.next(arglist__2407));
var more = cljs.core.rest(cljs.core.next(arglist__2407));
return G__2406__delegate.call(this, x, y, more);
});
return G__2406;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2402.call(this,x);
case  2 :
return max__2403.call(this,x,y);
default:
return max__2404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2404.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2408 = (function (x){
return x;
});
var min__2409 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2410 = (function() { 
var G__2412__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2412 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2412__delegate.call(this, x, y, more);
};
G__2412.cljs$lang$maxFixedArity = 2;
G__2412.cljs$lang$applyTo = (function (arglist__2413){
var x = cljs.core.first(arglist__2413);
var y = cljs.core.first(cljs.core.next(arglist__2413));
var more = cljs.core.rest(cljs.core.next(arglist__2413));
return G__2412__delegate.call(this, x, y, more);
});
return G__2412;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2408.call(this,x);
case  2 :
return min__2409.call(this,x,y);
default:
return min__2410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2410.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2414 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2414) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2415 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2415));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2416 = (function (){
return Math.random.call(null);
});
var rand__2417 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2416.call(this);
case  1 :
return rand__2417.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2419 = (function (x){
return true;
});
var _EQ__EQ___2420 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2421 = (function() { 
var G__2423__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2424 = y;
var G__2425 = cljs.core.first.call(null,more);
var G__2426 = cljs.core.next.call(null,more);
x = G__2424;
y = G__2425;
more = G__2426;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2423 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2423__delegate.call(this, x, y, more);
};
G__2423.cljs$lang$maxFixedArity = 2;
G__2423.cljs$lang$applyTo = (function (arglist__2427){
var x = cljs.core.first(arglist__2427);
var y = cljs.core.first(cljs.core.next(arglist__2427));
var more = cljs.core.rest(cljs.core.next(arglist__2427));
return G__2423__delegate.call(this, x, y, more);
});
return G__2423;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2419.call(this,x);
case  2 :
return _EQ__EQ___2420.call(this,x,y);
default:
return _EQ__EQ___2421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2421.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2428 = n;
var xs__2429 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2430 = xs__2429;

if(cljs.core.truth_(and__3546__auto____2430))
{return cljs.core.pos_QMARK_.call(null,n__2428);
} else
{return and__3546__auto____2430;
}
})()))
{{
var G__2431 = cljs.core.dec.call(null,n__2428);
var G__2432 = cljs.core.next.call(null,xs__2429);
n__2428 = G__2431;
xs__2429 = G__2432;
continue;
}
} else
{return xs__2429;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2437 = null;
var G__2437__2438 = (function (coll,n){
var temp__3695__auto____2433 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2433))
{var xs__2434 = temp__3695__auto____2433;

return cljs.core.first.call(null,xs__2434);
} else
{throw "Index out of bounds";
}
});
var G__2437__2439 = (function (coll,n,not_found){
var temp__3695__auto____2435 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2435))
{var xs__2436 = temp__3695__auto____2435;

return cljs.core.first.call(null,xs__2436);
} else
{return not_found;
}
});
G__2437 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2437__2438.call(this,coll,n);
case  3 :
return G__2437__2439.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2437;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2441 = (function (){
return "";
});
var str__2442 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2443 = (function() { 
var G__2445__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2446 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2447 = cljs.core.next.call(null,more);
sb = G__2446;
more = G__2447;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2445 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2445__delegate.call(this, x, ys);
};
G__2445.cljs$lang$maxFixedArity = 1;
G__2445.cljs$lang$applyTo = (function (arglist__2448){
var x = cljs.core.first(arglist__2448);
var ys = cljs.core.rest(arglist__2448);
return G__2445__delegate.call(this, x, ys);
});
return G__2445;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2441.call(this);
case  1 :
return str__2442.call(this,x);
default:
return str__2443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2443.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2449 = (function (s,start){
return s.substring(start);
});
var subs__2450 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2449.call(this,s,start);
case  3 :
return subs__2450.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2452 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2453 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2452.call(this,ns);
case  2 :
return symbol__2453.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2455 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2456 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2455.call(this,ns);
case  2 :
return keyword__2456.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2458 = cljs.core.seq.call(null,x);
var ys__2459 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2458)))
{return cljs.core.nil_QMARK_.call(null,ys__2459);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2459)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2458),cljs.core.first.call(null,ys__2459))))
{{
var G__2460 = cljs.core.next.call(null,xs__2458);
var G__2461 = cljs.core.next.call(null,ys__2459);
xs__2458 = G__2460;
ys__2459 = G__2461;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2462_SHARP_,p2__2463_SHARP_){
return cljs.core.hash_combine.call(null,p1__2462_SHARP_,cljs.core.hash.call(null,p2__2463_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2464 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2465 = this;
return (new cljs.core.List(this__2465.meta,o,coll,cljs.core.inc.call(null,this__2465.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2466 = this;
return this__2466.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2467 = this;
return this__2467.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2468 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2469 = this;
return this__2469.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2470 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2471 = this;
return (new cljs.core.List(meta,this__2471.first,this__2471.rest,this__2471.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2472 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2473 = this;
return this__2473.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2474 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2475 = this;
return this__2475.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2476 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2477 = this;
return (new cljs.core.List(this__2477.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2478 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2479 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2480 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2481 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2482 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2483 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2484 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2485 = this;
return this__2485.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2486 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2487 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2488){
var items = cljs.core.seq( arglist__2488 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2489 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2490 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2491 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2492 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2492.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2493 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2494 = this;
return this__2494.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2495 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2495.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2495.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2496 = this;
return this__2496.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2497 = this;
return (new cljs.core.Cons(meta,this__2497.first,this__2497.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2498 = null;
var G__2498__2499 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2498__2500 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2498 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2498__2499.call(this,string,f);
case  3 :
return G__2498__2500.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2498;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2502 = null;
var G__2502__2503 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2502__2504 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2502 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2502__2503.call(this,string,k);
case  3 :
return G__2502__2504.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2502;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2506 = null;
var G__2506__2507 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2506__2508 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2506 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2506__2507.call(this,string,n);
case  3 :
return G__2506__2508.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2506;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2510 = null;
var G__2510__2511 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2510__2512 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2510 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2510__2511.call(this,_,coll);
case  3 :
return G__2510__2512.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2510;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2514 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2514;
} else
{lazy_seq.x = x__2514.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2515 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2516 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2517 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2518 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2518.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2519 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2520 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2521 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2522 = this;
return this__2522.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2523 = this;
return (new cljs.core.LazySeq(meta,this__2523.realized,this__2523.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2524 = cljs.core.array.call(null);

var s__2525 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2525)))
{ary__2524.push(cljs.core.first.call(null,s__2525));
{
var G__2526 = cljs.core.next.call(null,s__2525);
s__2525 = G__2526;
continue;
}
} else
{return ary__2524;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2527 = s;
var i__2528 = n;
var sum__2529 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2530 = cljs.core.pos_QMARK_.call(null,i__2528);

if(cljs.core.truth_(and__3546__auto____2530))
{return cljs.core.seq.call(null,s__2527);
} else
{return and__3546__auto____2530;
}
})()))
{{
var G__2531 = cljs.core.next.call(null,s__2527);
var G__2532 = cljs.core.dec.call(null,i__2528);
var G__2533 = cljs.core.inc.call(null,sum__2529);
s__2527 = G__2531;
i__2528 = G__2532;
sum__2529 = G__2533;
continue;
}
} else
{return sum__2529;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2537 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2538 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2539 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2534 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2534))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2534),concat.call(null,cljs.core.rest.call(null,s__2534),y));
} else
{return y;
}
})));
});
var concat__2540 = (function() { 
var G__2542__delegate = function (x,y,zs){
var cat__2536 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2535 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2535))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2535),cat.call(null,cljs.core.rest.call(null,xys__2535),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2536.call(null,concat.call(null,x,y),zs);
};
var G__2542 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2542__delegate.call(this, x, y, zs);
};
G__2542.cljs$lang$maxFixedArity = 2;
G__2542.cljs$lang$applyTo = (function (arglist__2543){
var x = cljs.core.first(arglist__2543);
var y = cljs.core.first(cljs.core.next(arglist__2543));
var zs = cljs.core.rest(cljs.core.next(arglist__2543));
return G__2542__delegate.call(this, x, y, zs);
});
return G__2542;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2537.call(this);
case  1 :
return concat__2538.call(this,x);
case  2 :
return concat__2539.call(this,x,y);
default:
return concat__2540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2540.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2544 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2545 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2546 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2547 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2548 = (function() { 
var G__2550__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2550 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2550__delegate.call(this, a, b, c, d, more);
};
G__2550.cljs$lang$maxFixedArity = 4;
G__2550.cljs$lang$applyTo = (function (arglist__2551){
var a = cljs.core.first(arglist__2551);
var b = cljs.core.first(cljs.core.next(arglist__2551));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2551)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2551))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2551))));
return G__2550__delegate.call(this, a, b, c, d, more);
});
return G__2550;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2544.call(this,a);
case  2 :
return list_STAR___2545.call(this,a,b);
case  3 :
return list_STAR___2546.call(this,a,b,c);
case  4 :
return list_STAR___2547.call(this,a,b,c,d);
default:
return list_STAR___2548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2548.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2561 = (function (f,args){
var fixed_arity__2552 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2552)),fixed_arity__2552)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2562 = (function (f,x,args){
var arglist__2553 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2554 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2553,fixed_arity__2554),fixed_arity__2554)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2553));
} else
{return f.cljs$lang$applyTo(arglist__2553);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2553));
}
});
var apply__2563 = (function (f,x,y,args){
var arglist__2555 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2556 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2555,fixed_arity__2556),fixed_arity__2556)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2555));
} else
{return f.cljs$lang$applyTo(arglist__2555);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2555));
}
});
var apply__2564 = (function (f,x,y,z,args){
var arglist__2557 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2558 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2557,fixed_arity__2558),fixed_arity__2558)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2557));
} else
{return f.cljs$lang$applyTo(arglist__2557);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2557));
}
});
var apply__2565 = (function() { 
var G__2567__delegate = function (f,a,b,c,d,args){
var arglist__2559 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2560 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2559,fixed_arity__2560),fixed_arity__2560)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2559));
} else
{return f.cljs$lang$applyTo(arglist__2559);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2559));
}
};
var G__2567 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2567__delegate.call(this, f, a, b, c, d, args);
};
G__2567.cljs$lang$maxFixedArity = 5;
G__2567.cljs$lang$applyTo = (function (arglist__2568){
var f = cljs.core.first(arglist__2568);
var a = cljs.core.first(cljs.core.next(arglist__2568));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2568)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2568))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2568)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2568)))));
return G__2567__delegate.call(this, f, a, b, c, d, args);
});
return G__2567;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2561.call(this,f,a);
case  3 :
return apply__2562.call(this,f,a,b);
case  4 :
return apply__2563.call(this,f,a,b,c);
case  5 :
return apply__2564.call(this,f,a,b,c,d);
default:
return apply__2565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2565.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2569){
var obj = cljs.core.first(arglist__2569);
var f = cljs.core.first(cljs.core.next(arglist__2569));
var args = cljs.core.rest(cljs.core.next(arglist__2569));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2570 = (function (x){
return false;
});
var not_EQ___2571 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2572 = (function() { 
var G__2574__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2574__delegate.call(this, x, y, more);
};
G__2574.cljs$lang$maxFixedArity = 2;
G__2574.cljs$lang$applyTo = (function (arglist__2575){
var x = cljs.core.first(arglist__2575);
var y = cljs.core.first(cljs.core.next(arglist__2575));
var more = cljs.core.rest(cljs.core.next(arglist__2575));
return G__2574__delegate.call(this, x, y, more);
});
return G__2574;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2570.call(this,x);
case  2 :
return not_EQ___2571.call(this,x,y);
default:
return not_EQ___2572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2572.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2576 = pred;
var G__2577 = cljs.core.next.call(null,coll);
pred = G__2576;
coll = G__2577;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2578 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2578))
{return or__3548__auto____2578;
} else
{{
var G__2579 = pred;
var G__2580 = cljs.core.next.call(null,coll);
pred = G__2579;
coll = G__2580;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2581 = null;
var G__2581__2582 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2581__2583 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2581__2584 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2581__2585 = (function() { 
var G__2587__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2587 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2587__delegate.call(this, x, y, zs);
};
G__2587.cljs$lang$maxFixedArity = 2;
G__2587.cljs$lang$applyTo = (function (arglist__2588){
var x = cljs.core.first(arglist__2588);
var y = cljs.core.first(cljs.core.next(arglist__2588));
var zs = cljs.core.rest(cljs.core.next(arglist__2588));
return G__2587__delegate.call(this, x, y, zs);
});
return G__2587;
})()
;
G__2581 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2581__2582.call(this);
case  1 :
return G__2581__2583.call(this,x);
case  2 :
return G__2581__2584.call(this,x,y);
default:
return G__2581__2585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2581.cljs$lang$maxFixedArity = 2;
G__2581.cljs$lang$applyTo = G__2581__2585.cljs$lang$applyTo;
return G__2581;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2589__delegate = function (args){
return x;
};
var G__2589 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2589__delegate.call(this, args);
};
G__2589.cljs$lang$maxFixedArity = 0;
G__2589.cljs$lang$applyTo = (function (arglist__2590){
var args = cljs.core.seq( arglist__2590 );;
return G__2589__delegate.call(this, args);
});
return G__2589;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2594 = (function (){
return cljs.core.identity;
});
var comp__2595 = (function (f){
return f;
});
var comp__2596 = (function (f,g){
return (function() {
var G__2600 = null;
var G__2600__2601 = (function (){
return f.call(null,g.call(null));
});
var G__2600__2602 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2600__2603 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2600__2604 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2600__2605 = (function() { 
var G__2607__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2607 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2607__delegate.call(this, x, y, z, args);
};
G__2607.cljs$lang$maxFixedArity = 3;
G__2607.cljs$lang$applyTo = (function (arglist__2608){
var x = cljs.core.first(arglist__2608);
var y = cljs.core.first(cljs.core.next(arglist__2608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2608)));
return G__2607__delegate.call(this, x, y, z, args);
});
return G__2607;
})()
;
G__2600 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2600__2601.call(this);
case  1 :
return G__2600__2602.call(this,x);
case  2 :
return G__2600__2603.call(this,x,y);
case  3 :
return G__2600__2604.call(this,x,y,z);
default:
return G__2600__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2600.cljs$lang$maxFixedArity = 3;
G__2600.cljs$lang$applyTo = G__2600__2605.cljs$lang$applyTo;
return G__2600;
})()
});
var comp__2597 = (function (f,g,h){
return (function() {
var G__2609 = null;
var G__2609__2610 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2609__2611 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2609__2612 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2609__2613 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2609__2614 = (function() { 
var G__2616__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2616 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2616__delegate.call(this, x, y, z, args);
};
G__2616.cljs$lang$maxFixedArity = 3;
G__2616.cljs$lang$applyTo = (function (arglist__2617){
var x = cljs.core.first(arglist__2617);
var y = cljs.core.first(cljs.core.next(arglist__2617));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2617)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2617)));
return G__2616__delegate.call(this, x, y, z, args);
});
return G__2616;
})()
;
G__2609 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2609__2610.call(this);
case  1 :
return G__2609__2611.call(this,x);
case  2 :
return G__2609__2612.call(this,x,y);
case  3 :
return G__2609__2613.call(this,x,y,z);
default:
return G__2609__2614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2609.cljs$lang$maxFixedArity = 3;
G__2609.cljs$lang$applyTo = G__2609__2614.cljs$lang$applyTo;
return G__2609;
})()
});
var comp__2598 = (function() { 
var G__2618__delegate = function (f1,f2,f3,fs){
var fs__2591 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2619__delegate = function (args){
var ret__2592 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2591),args);
var fs__2593 = cljs.core.next.call(null,fs__2591);

while(true){
if(cljs.core.truth_(fs__2593))
{{
var G__2620 = cljs.core.first.call(null,fs__2593).call(null,ret__2592);
var G__2621 = cljs.core.next.call(null,fs__2593);
ret__2592 = G__2620;
fs__2593 = G__2621;
continue;
}
} else
{return ret__2592;
}
break;
}
};
var G__2619 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2619__delegate.call(this, args);
};
G__2619.cljs$lang$maxFixedArity = 0;
G__2619.cljs$lang$applyTo = (function (arglist__2622){
var args = cljs.core.seq( arglist__2622 );;
return G__2619__delegate.call(this, args);
});
return G__2619;
})()
;
};
var G__2618 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2618__delegate.call(this, f1, f2, f3, fs);
};
G__2618.cljs$lang$maxFixedArity = 3;
G__2618.cljs$lang$applyTo = (function (arglist__2623){
var f1 = cljs.core.first(arglist__2623);
var f2 = cljs.core.first(cljs.core.next(arglist__2623));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2623)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2623)));
return G__2618__delegate.call(this, f1, f2, f3, fs);
});
return G__2618;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2594.call(this);
case  1 :
return comp__2595.call(this,f1);
case  2 :
return comp__2596.call(this,f1,f2);
case  3 :
return comp__2597.call(this,f1,f2,f3);
default:
return comp__2598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2598.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2624 = (function (f,arg1){
return (function() { 
var G__2629__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2629 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2629__delegate.call(this, args);
};
G__2629.cljs$lang$maxFixedArity = 0;
G__2629.cljs$lang$applyTo = (function (arglist__2630){
var args = cljs.core.seq( arglist__2630 );;
return G__2629__delegate.call(this, args);
});
return G__2629;
})()
;
});
var partial__2625 = (function (f,arg1,arg2){
return (function() { 
var G__2631__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2631 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2631__delegate.call(this, args);
};
G__2631.cljs$lang$maxFixedArity = 0;
G__2631.cljs$lang$applyTo = (function (arglist__2632){
var args = cljs.core.seq( arglist__2632 );;
return G__2631__delegate.call(this, args);
});
return G__2631;
})()
;
});
var partial__2626 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2633__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2633 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2633__delegate.call(this, args);
};
G__2633.cljs$lang$maxFixedArity = 0;
G__2633.cljs$lang$applyTo = (function (arglist__2634){
var args = cljs.core.seq( arglist__2634 );;
return G__2633__delegate.call(this, args);
});
return G__2633;
})()
;
});
var partial__2627 = (function() { 
var G__2635__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2636__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2636 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2636__delegate.call(this, args);
};
G__2636.cljs$lang$maxFixedArity = 0;
G__2636.cljs$lang$applyTo = (function (arglist__2637){
var args = cljs.core.seq( arglist__2637 );;
return G__2636__delegate.call(this, args);
});
return G__2636;
})()
;
};
var G__2635 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2635__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2635.cljs$lang$maxFixedArity = 4;
G__2635.cljs$lang$applyTo = (function (arglist__2638){
var f = cljs.core.first(arglist__2638);
var arg1 = cljs.core.first(cljs.core.next(arglist__2638));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2638)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2638))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2638))));
return G__2635__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2635;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2624.call(this,f,arg1);
case  3 :
return partial__2625.call(this,f,arg1,arg2);
case  4 :
return partial__2626.call(this,f,arg1,arg2,arg3);
default:
return partial__2627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2627.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2639 = (function (f,x){
return (function() {
var G__2643 = null;
var G__2643__2644 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2643__2645 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2643__2646 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2643__2647 = (function() { 
var G__2649__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2649 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2649__delegate.call(this, a, b, c, ds);
};
G__2649.cljs$lang$maxFixedArity = 3;
G__2649.cljs$lang$applyTo = (function (arglist__2650){
var a = cljs.core.first(arglist__2650);
var b = cljs.core.first(cljs.core.next(arglist__2650));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2650)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2650)));
return G__2649__delegate.call(this, a, b, c, ds);
});
return G__2649;
})()
;
G__2643 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2643__2644.call(this,a);
case  2 :
return G__2643__2645.call(this,a,b);
case  3 :
return G__2643__2646.call(this,a,b,c);
default:
return G__2643__2647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2643.cljs$lang$maxFixedArity = 3;
G__2643.cljs$lang$applyTo = G__2643__2647.cljs$lang$applyTo;
return G__2643;
})()
});
var fnil__2640 = (function (f,x,y){
return (function() {
var G__2651 = null;
var G__2651__2652 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2651__2653 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2651__2654 = (function() { 
var G__2656__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2656 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2656__delegate.call(this, a, b, c, ds);
};
G__2656.cljs$lang$maxFixedArity = 3;
G__2656.cljs$lang$applyTo = (function (arglist__2657){
var a = cljs.core.first(arglist__2657);
var b = cljs.core.first(cljs.core.next(arglist__2657));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2657)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2657)));
return G__2656__delegate.call(this, a, b, c, ds);
});
return G__2656;
})()
;
G__2651 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2651__2652.call(this,a,b);
case  3 :
return G__2651__2653.call(this,a,b,c);
default:
return G__2651__2654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2651.cljs$lang$maxFixedArity = 3;
G__2651.cljs$lang$applyTo = G__2651__2654.cljs$lang$applyTo;
return G__2651;
})()
});
var fnil__2641 = (function (f,x,y,z){
return (function() {
var G__2658 = null;
var G__2658__2659 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2658__2660 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2658__2661 = (function() { 
var G__2663__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2663 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2663__delegate.call(this, a, b, c, ds);
};
G__2663.cljs$lang$maxFixedArity = 3;
G__2663.cljs$lang$applyTo = (function (arglist__2664){
var a = cljs.core.first(arglist__2664);
var b = cljs.core.first(cljs.core.next(arglist__2664));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2664)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2664)));
return G__2663__delegate.call(this, a, b, c, ds);
});
return G__2663;
})()
;
G__2658 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2658__2659.call(this,a,b);
case  3 :
return G__2658__2660.call(this,a,b,c);
default:
return G__2658__2661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2658.cljs$lang$maxFixedArity = 3;
G__2658.cljs$lang$applyTo = G__2658__2661.cljs$lang$applyTo;
return G__2658;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2639.call(this,f,x);
case  3 :
return fnil__2640.call(this,f,x,y);
case  4 :
return fnil__2641.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2667 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2665))
{var s__2666 = temp__3698__auto____2665;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2666)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2666)));
} else
{return null;
}
})));
});

return mapi__2667.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2668))
{var s__2669 = temp__3698__auto____2668;

var x__2670 = f.call(null,cljs.core.first.call(null,s__2669));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2670)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2669));
} else
{return cljs.core.cons.call(null,x__2670,keep.call(null,f,cljs.core.rest.call(null,s__2669)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2680 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2677 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2677))
{var s__2678 = temp__3698__auto____2677;

var x__2679 = f.call(null,idx,cljs.core.first.call(null,s__2678));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2679)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2678));
} else
{return cljs.core.cons.call(null,x__2679,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2678)));
}
} else
{return null;
}
})));
});

return keepi__2680.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2725 = (function (p){
return (function() {
var ep1 = null;
var ep1__2730 = (function (){
return true;
});
var ep1__2731 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2732 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2687 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2687))
{return p.call(null,y);
} else
{return and__3546__auto____2687;
}
})());
});
var ep1__2733 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2688 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2688))
{var and__3546__auto____2689 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2689))
{return p.call(null,z);
} else
{return and__3546__auto____2689;
}
} else
{return and__3546__auto____2688;
}
})());
});
var ep1__2734 = (function() { 
var G__2736__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2690 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2690))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2690;
}
})());
};
var G__2736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2736__delegate.call(this, x, y, z, args);
};
G__2736.cljs$lang$maxFixedArity = 3;
G__2736.cljs$lang$applyTo = (function (arglist__2737){
var x = cljs.core.first(arglist__2737);
var y = cljs.core.first(cljs.core.next(arglist__2737));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2737)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2737)));
return G__2736__delegate.call(this, x, y, z, args);
});
return G__2736;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2730.call(this);
case  1 :
return ep1__2731.call(this,x);
case  2 :
return ep1__2732.call(this,x,y);
case  3 :
return ep1__2733.call(this,x,y,z);
default:
return ep1__2734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2734.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2726 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2738 = (function (){
return true;
});
var ep2__2739 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2691 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2691))
{return p2.call(null,x);
} else
{return and__3546__auto____2691;
}
})());
});
var ep2__2740 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2692 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2692))
{var and__3546__auto____2693 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2693))
{var and__3546__auto____2694 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2694))
{return p2.call(null,y);
} else
{return and__3546__auto____2694;
}
} else
{return and__3546__auto____2693;
}
} else
{return and__3546__auto____2692;
}
})());
});
var ep2__2741 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2695 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2695))
{var and__3546__auto____2696 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2696))
{var and__3546__auto____2697 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2697))
{var and__3546__auto____2698 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2698))
{var and__3546__auto____2699 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2699))
{return p2.call(null,z);
} else
{return and__3546__auto____2699;
}
} else
{return and__3546__auto____2698;
}
} else
{return and__3546__auto____2697;
}
} else
{return and__3546__auto____2696;
}
} else
{return and__3546__auto____2695;
}
})());
});
var ep2__2742 = (function() { 
var G__2744__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2700 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2700))
{return cljs.core.every_QMARK_.call(null,(function (p1__2671_SHARP_){
var and__3546__auto____2701 = p1.call(null,p1__2671_SHARP_);

if(cljs.core.truth_(and__3546__auto____2701))
{return p2.call(null,p1__2671_SHARP_);
} else
{return and__3546__auto____2701;
}
}),args);
} else
{return and__3546__auto____2700;
}
})());
};
var G__2744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2744__delegate.call(this, x, y, z, args);
};
G__2744.cljs$lang$maxFixedArity = 3;
G__2744.cljs$lang$applyTo = (function (arglist__2745){
var x = cljs.core.first(arglist__2745);
var y = cljs.core.first(cljs.core.next(arglist__2745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2745)));
return G__2744__delegate.call(this, x, y, z, args);
});
return G__2744;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2738.call(this);
case  1 :
return ep2__2739.call(this,x);
case  2 :
return ep2__2740.call(this,x,y);
case  3 :
return ep2__2741.call(this,x,y,z);
default:
return ep2__2742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2742.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2727 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2746 = (function (){
return true;
});
var ep3__2747 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2702 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2702))
{var and__3546__auto____2703 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2703))
{return p3.call(null,x);
} else
{return and__3546__auto____2703;
}
} else
{return and__3546__auto____2702;
}
})());
});
var ep3__2748 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2704 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2704))
{var and__3546__auto____2705 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2705))
{var and__3546__auto____2706 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2706))
{var and__3546__auto____2707 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2707))
{var and__3546__auto____2708 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2708))
{return p3.call(null,y);
} else
{return and__3546__auto____2708;
}
} else
{return and__3546__auto____2707;
}
} else
{return and__3546__auto____2706;
}
} else
{return and__3546__auto____2705;
}
} else
{return and__3546__auto____2704;
}
})());
});
var ep3__2749 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2709 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2709))
{var and__3546__auto____2710 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2710))
{var and__3546__auto____2711 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2711))
{var and__3546__auto____2712 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2712))
{var and__3546__auto____2713 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2713))
{var and__3546__auto____2714 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____2714))
{var and__3546__auto____2715 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2715))
{var and__3546__auto____2716 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____2716))
{return p3.call(null,z);
} else
{return and__3546__auto____2716;
}
} else
{return and__3546__auto____2715;
}
} else
{return and__3546__auto____2714;
}
} else
{return and__3546__auto____2713;
}
} else
{return and__3546__auto____2712;
}
} else
{return and__3546__auto____2711;
}
} else
{return and__3546__auto____2710;
}
} else
{return and__3546__auto____2709;
}
})());
});
var ep3__2750 = (function() { 
var G__2752__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2717 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2717))
{return cljs.core.every_QMARK_.call(null,(function (p1__2672_SHARP_){
var and__3546__auto____2718 = p1.call(null,p1__2672_SHARP_);

if(cljs.core.truth_(and__3546__auto____2718))
{var and__3546__auto____2719 = p2.call(null,p1__2672_SHARP_);

if(cljs.core.truth_(and__3546__auto____2719))
{return p3.call(null,p1__2672_SHARP_);
} else
{return and__3546__auto____2719;
}
} else
{return and__3546__auto____2718;
}
}),args);
} else
{return and__3546__auto____2717;
}
})());
};
var G__2752 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2752__delegate.call(this, x, y, z, args);
};
G__2752.cljs$lang$maxFixedArity = 3;
G__2752.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2753)));
return G__2752__delegate.call(this, x, y, z, args);
});
return G__2752;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2746.call(this);
case  1 :
return ep3__2747.call(this,x);
case  2 :
return ep3__2748.call(this,x,y);
case  3 :
return ep3__2749.call(this,x,y,z);
default:
return ep3__2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2750.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2728 = (function() { 
var G__2754__delegate = function (p1,p2,p3,ps){
var ps__2720 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2755 = (function (){
return true;
});
var epn__2756 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2673_SHARP_){
return p1__2673_SHARP_.call(null,x);
}),ps__2720);
});
var epn__2757 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2674_SHARP_){
var and__3546__auto____2721 = p1__2674_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2721))
{return p1__2674_SHARP_.call(null,y);
} else
{return and__3546__auto____2721;
}
}),ps__2720);
});
var epn__2758 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2675_SHARP_){
var and__3546__auto____2722 = p1__2675_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2722))
{var and__3546__auto____2723 = p1__2675_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____2723))
{return p1__2675_SHARP_.call(null,z);
} else
{return and__3546__auto____2723;
}
} else
{return and__3546__auto____2722;
}
}),ps__2720);
});
var epn__2759 = (function() { 
var G__2761__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2724 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2724))
{return cljs.core.every_QMARK_.call(null,(function (p1__2676_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2676_SHARP_,args);
}),ps__2720);
} else
{return and__3546__auto____2724;
}
})());
};
var G__2761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2761__delegate.call(this, x, y, z, args);
};
G__2761.cljs$lang$maxFixedArity = 3;
G__2761.cljs$lang$applyTo = (function (arglist__2762){
var x = cljs.core.first(arglist__2762);
var y = cljs.core.first(cljs.core.next(arglist__2762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2762)));
return G__2761__delegate.call(this, x, y, z, args);
});
return G__2761;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2755.call(this);
case  1 :
return epn__2756.call(this,x);
case  2 :
return epn__2757.call(this,x,y);
case  3 :
return epn__2758.call(this,x,y,z);
default:
return epn__2759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2759.cljs$lang$applyTo;
return epn;
})()
};
var G__2754 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2754__delegate.call(this, p1, p2, p3, ps);
};
G__2754.cljs$lang$maxFixedArity = 3;
G__2754.cljs$lang$applyTo = (function (arglist__2763){
var p1 = cljs.core.first(arglist__2763);
var p2 = cljs.core.first(cljs.core.next(arglist__2763));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2763)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2763)));
return G__2754__delegate.call(this, p1, p2, p3, ps);
});
return G__2754;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2725.call(this,p1);
case  2 :
return every_pred__2726.call(this,p1,p2);
case  3 :
return every_pred__2727.call(this,p1,p2,p3);
default:
return every_pred__2728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2728.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2803 = (function (p){
return (function() {
var sp1 = null;
var sp1__2808 = (function (){
return null;
});
var sp1__2809 = (function (x){
return p.call(null,x);
});
var sp1__2810 = (function (x,y){
var or__3548__auto____2765 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____2765))
{return or__3548__auto____2765;
} else
{return p.call(null,y);
}
});
var sp1__2811 = (function (x,y,z){
var or__3548__auto____2766 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____2766))
{return or__3548__auto____2766;
} else
{var or__3548__auto____2767 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____2767))
{return or__3548__auto____2767;
} else
{return p.call(null,z);
}
}
});
var sp1__2812 = (function() { 
var G__2814__delegate = function (x,y,z,args){
var or__3548__auto____2768 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2768))
{return or__3548__auto____2768;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2814 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2814__delegate.call(this, x, y, z, args);
};
G__2814.cljs$lang$maxFixedArity = 3;
G__2814.cljs$lang$applyTo = (function (arglist__2815){
var x = cljs.core.first(arglist__2815);
var y = cljs.core.first(cljs.core.next(arglist__2815));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2815)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2815)));
return G__2814__delegate.call(this, x, y, z, args);
});
return G__2814;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2808.call(this);
case  1 :
return sp1__2809.call(this,x);
case  2 :
return sp1__2810.call(this,x,y);
case  3 :
return sp1__2811.call(this,x,y,z);
default:
return sp1__2812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2812.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2804 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2816 = (function (){
return null;
});
var sp2__2817 = (function (x){
var or__3548__auto____2769 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2769))
{return or__3548__auto____2769;
} else
{return p2.call(null,x);
}
});
var sp2__2818 = (function (x,y){
var or__3548__auto____2770 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2770))
{return or__3548__auto____2770;
} else
{var or__3548__auto____2771 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2771))
{return or__3548__auto____2771;
} else
{var or__3548__auto____2772 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2772))
{return or__3548__auto____2772;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2819 = (function (x,y,z){
var or__3548__auto____2773 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2773))
{return or__3548__auto____2773;
} else
{var or__3548__auto____2774 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2774))
{return or__3548__auto____2774;
} else
{var or__3548__auto____2775 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____2775))
{return or__3548__auto____2775;
} else
{var or__3548__auto____2776 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2776))
{return or__3548__auto____2776;
} else
{var or__3548__auto____2777 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2777))
{return or__3548__auto____2777;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2820 = (function() { 
var G__2822__delegate = function (x,y,z,args){
var or__3548__auto____2778 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2778))
{return or__3548__auto____2778;
} else
{return cljs.core.some.call(null,(function (p1__2681_SHARP_){
var or__3548__auto____2779 = p1.call(null,p1__2681_SHARP_);

if(cljs.core.truth_(or__3548__auto____2779))
{return or__3548__auto____2779;
} else
{return p2.call(null,p1__2681_SHARP_);
}
}),args);
}
};
var G__2822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2822__delegate.call(this, x, y, z, args);
};
G__2822.cljs$lang$maxFixedArity = 3;
G__2822.cljs$lang$applyTo = (function (arglist__2823){
var x = cljs.core.first(arglist__2823);
var y = cljs.core.first(cljs.core.next(arglist__2823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2823)));
return G__2822__delegate.call(this, x, y, z, args);
});
return G__2822;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2816.call(this);
case  1 :
return sp2__2817.call(this,x);
case  2 :
return sp2__2818.call(this,x,y);
case  3 :
return sp2__2819.call(this,x,y,z);
default:
return sp2__2820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2820.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2805 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2824 = (function (){
return null;
});
var sp3__2825 = (function (x){
var or__3548__auto____2780 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2780))
{return or__3548__auto____2780;
} else
{var or__3548__auto____2781 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2781))
{return or__3548__auto____2781;
} else
{return p3.call(null,x);
}
}
});
var sp3__2826 = (function (x,y){
var or__3548__auto____2782 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2782))
{return or__3548__auto____2782;
} else
{var or__3548__auto____2783 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2783))
{return or__3548__auto____2783;
} else
{var or__3548__auto____2784 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____2784))
{return or__3548__auto____2784;
} else
{var or__3548__auto____2785 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2785))
{return or__3548__auto____2785;
} else
{var or__3548__auto____2786 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2786))
{return or__3548__auto____2786;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2827 = (function (x,y,z){
var or__3548__auto____2787 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____2787))
{return or__3548__auto____2787;
} else
{var or__3548__auto____2788 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____2788))
{return or__3548__auto____2788;
} else
{var or__3548__auto____2789 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____2789))
{return or__3548__auto____2789;
} else
{var or__3548__auto____2790 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____2790))
{return or__3548__auto____2790;
} else
{var or__3548__auto____2791 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____2791))
{return or__3548__auto____2791;
} else
{var or__3548__auto____2792 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____2792))
{return or__3548__auto____2792;
} else
{var or__3548__auto____2793 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____2793))
{return or__3548__auto____2793;
} else
{var or__3548__auto____2794 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____2794))
{return or__3548__auto____2794;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2828 = (function() { 
var G__2830__delegate = function (x,y,z,args){
var or__3548__auto____2795 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2795))
{return or__3548__auto____2795;
} else
{return cljs.core.some.call(null,(function (p1__2682_SHARP_){
var or__3548__auto____2796 = p1.call(null,p1__2682_SHARP_);

if(cljs.core.truth_(or__3548__auto____2796))
{return or__3548__auto____2796;
} else
{var or__3548__auto____2797 = p2.call(null,p1__2682_SHARP_);

if(cljs.core.truth_(or__3548__auto____2797))
{return or__3548__auto____2797;
} else
{return p3.call(null,p1__2682_SHARP_);
}
}
}),args);
}
};
var G__2830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2830__delegate.call(this, x, y, z, args);
};
G__2830.cljs$lang$maxFixedArity = 3;
G__2830.cljs$lang$applyTo = (function (arglist__2831){
var x = cljs.core.first(arglist__2831);
var y = cljs.core.first(cljs.core.next(arglist__2831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2831)));
return G__2830__delegate.call(this, x, y, z, args);
});
return G__2830;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2824.call(this);
case  1 :
return sp3__2825.call(this,x);
case  2 :
return sp3__2826.call(this,x,y);
case  3 :
return sp3__2827.call(this,x,y,z);
default:
return sp3__2828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2828.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2806 = (function() { 
var G__2832__delegate = function (p1,p2,p3,ps){
var ps__2798 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2833 = (function (){
return null;
});
var spn__2834 = (function (x){
return cljs.core.some.call(null,(function (p1__2683_SHARP_){
return p1__2683_SHARP_.call(null,x);
}),ps__2798);
});
var spn__2835 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2684_SHARP_){
var or__3548__auto____2799 = p1__2684_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2799))
{return or__3548__auto____2799;
} else
{return p1__2684_SHARP_.call(null,y);
}
}),ps__2798);
});
var spn__2836 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2685_SHARP_){
var or__3548__auto____2800 = p1__2685_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2800))
{return or__3548__auto____2800;
} else
{var or__3548__auto____2801 = p1__2685_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____2801))
{return or__3548__auto____2801;
} else
{return p1__2685_SHARP_.call(null,z);
}
}
}),ps__2798);
});
var spn__2837 = (function() { 
var G__2839__delegate = function (x,y,z,args){
var or__3548__auto____2802 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____2802))
{return or__3548__auto____2802;
} else
{return cljs.core.some.call(null,(function (p1__2686_SHARP_){
return cljs.core.some.call(null,p1__2686_SHARP_,args);
}),ps__2798);
}
};
var G__2839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2839__delegate.call(this, x, y, z, args);
};
G__2839.cljs$lang$maxFixedArity = 3;
G__2839.cljs$lang$applyTo = (function (arglist__2840){
var x = cljs.core.first(arglist__2840);
var y = cljs.core.first(cljs.core.next(arglist__2840));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2840)));
return G__2839__delegate.call(this, x, y, z, args);
});
return G__2839;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2833.call(this);
case  1 :
return spn__2834.call(this,x);
case  2 :
return spn__2835.call(this,x,y);
case  3 :
return spn__2836.call(this,x,y,z);
default:
return spn__2837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2837.cljs$lang$applyTo;
return spn;
})()
};
var G__2832 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2832__delegate.call(this, p1, p2, p3, ps);
};
G__2832.cljs$lang$maxFixedArity = 3;
G__2832.cljs$lang$applyTo = (function (arglist__2841){
var p1 = cljs.core.first(arglist__2841);
var p2 = cljs.core.first(cljs.core.next(arglist__2841));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2841)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2841)));
return G__2832__delegate.call(this, p1, p2, p3, ps);
});
return G__2832;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2803.call(this,p1);
case  2 :
return some_fn__2804.call(this,p1,p2);
case  3 :
return some_fn__2805.call(this,p1,p2,p3);
default:
return some_fn__2806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2806.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2854 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2842 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2842))
{var s__2843 = temp__3698__auto____2842;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2843)),map.call(null,f,cljs.core.rest.call(null,s__2843)));
} else
{return null;
}
})));
});
var map__2855 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2844 = cljs.core.seq.call(null,c1);
var s2__2845 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____2846 = s1__2844;

if(cljs.core.truth_(and__3546__auto____2846))
{return s2__2845;
} else
{return and__3546__auto____2846;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2844),cljs.core.first.call(null,s2__2845)),map.call(null,f,cljs.core.rest.call(null,s1__2844),cljs.core.rest.call(null,s2__2845)));
} else
{return null;
}
})));
});
var map__2856 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2847 = cljs.core.seq.call(null,c1);
var s2__2848 = cljs.core.seq.call(null,c2);
var s3__2849 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____2850 = s1__2847;

if(cljs.core.truth_(and__3546__auto____2850))
{var and__3546__auto____2851 = s2__2848;

if(cljs.core.truth_(and__3546__auto____2851))
{return s3__2849;
} else
{return and__3546__auto____2851;
}
} else
{return and__3546__auto____2850;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2847),cljs.core.first.call(null,s2__2848),cljs.core.first.call(null,s3__2849)),map.call(null,f,cljs.core.rest.call(null,s1__2847),cljs.core.rest.call(null,s2__2848),cljs.core.rest.call(null,s3__2849)));
} else
{return null;
}
})));
});
var map__2857 = (function() { 
var G__2859__delegate = function (f,c1,c2,c3,colls){
var step__2853 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2852 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2852)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2852),step.call(null,map.call(null,cljs.core.rest,ss__2852)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2764_SHARP_){
return cljs.core.apply.call(null,f,p1__2764_SHARP_);
}),step__2853.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2859 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2859__delegate.call(this, f, c1, c2, c3, colls);
};
G__2859.cljs$lang$maxFixedArity = 4;
G__2859.cljs$lang$applyTo = (function (arglist__2860){
var f = cljs.core.first(arglist__2860);
var c1 = cljs.core.first(cljs.core.next(arglist__2860));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2860)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2860))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2860))));
return G__2859__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2859;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2854.call(this,f,c1);
case  3 :
return map__2855.call(this,f,c1,c2);
case  4 :
return map__2856.call(this,f,c1,c2,c3);
default:
return map__2857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2857.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3698__auto____2861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2861))
{var s__2862 = temp__3698__auto____2861;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2862),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2862)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2865 = (function (n,coll){
while(true){
var s__2863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____2864 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2864))
{return s__2863;
} else
{return and__3546__auto____2864;
}
})()))
{{
var G__2866 = cljs.core.dec.call(null,n);
var G__2867 = cljs.core.rest.call(null,s__2863);
n = G__2866;
coll = G__2867;
continue;
}
} else
{return s__2863;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2865.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2868 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2869 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2868.call(this,n);
case  2 :
return drop_last__2869.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2871 = cljs.core.seq.call(null,coll);
var lead__2872 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2872))
{{
var G__2873 = cljs.core.next.call(null,s__2871);
var G__2874 = cljs.core.next.call(null,lead__2872);
s__2871 = G__2873;
lead__2872 = G__2874;
continue;
}
} else
{return s__2871;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2877 = (function (pred,coll){
while(true){
var s__2875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____2876 = s__2875;

if(cljs.core.truth_(and__3546__auto____2876))
{return pred.call(null,cljs.core.first.call(null,s__2875));
} else
{return and__3546__auto____2876;
}
})()))
{{
var G__2878 = pred;
var G__2879 = cljs.core.rest.call(null,s__2875);
pred = G__2878;
coll = G__2879;
continue;
}
} else
{return s__2875;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2877.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2880))
{var s__2881 = temp__3698__auto____2880;

return cljs.core.concat.call(null,s__2881,cycle.call(null,s__2881));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2882 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2883 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2882.call(this,n);
case  2 :
return repeat__2883.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2885 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2886 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2885.call(this,n);
case  2 :
return repeatedly__2886.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2892 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2888 = cljs.core.seq.call(null,c1);
var s2__2889 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____2890 = s1__2888;

if(cljs.core.truth_(and__3546__auto____2890))
{return s2__2889;
} else
{return and__3546__auto____2890;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2888),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2889),interleave.call(null,cljs.core.rest.call(null,s1__2888),cljs.core.rest.call(null,s2__2889))));
} else
{return null;
}
})));
});
var interleave__2893 = (function() { 
var G__2895__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2891 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2891)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2891),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2891)));
} else
{return null;
}
})));
};
var G__2895 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2895__delegate.call(this, c1, c2, colls);
};
G__2895.cljs$lang$maxFixedArity = 2;
G__2895.cljs$lang$applyTo = (function (arglist__2896){
var c1 = cljs.core.first(arglist__2896);
var c2 = cljs.core.first(cljs.core.next(arglist__2896));
var colls = cljs.core.rest(cljs.core.next(arglist__2896));
return G__2895__delegate.call(this, c1, c2, colls);
});
return G__2895;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2892.call(this,c1,c2);
default:
return interleave__2893.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2893.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2899 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____2897 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2897))
{var coll__2898 = temp__3695__auto____2897;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2898),cat.call(null,cljs.core.rest.call(null,coll__2898),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2899.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2900 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2901 = (function() { 
var G__2903__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2903 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2903__delegate.call(this, f, coll, colls);
};
G__2903.cljs$lang$maxFixedArity = 2;
G__2903.cljs$lang$applyTo = (function (arglist__2904){
var f = cljs.core.first(arglist__2904);
var coll = cljs.core.first(cljs.core.next(arglist__2904));
var colls = cljs.core.rest(cljs.core.next(arglist__2904));
return G__2903__delegate.call(this, f, coll, colls);
});
return G__2903;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2900.call(this,f,coll);
default:
return mapcat__2901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2901.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2905))
{var s__2906 = temp__3698__auto____2905;

var f__2907 = cljs.core.first.call(null,s__2906);
var r__2908 = cljs.core.rest.call(null,s__2906);

if(cljs.core.truth_(pred.call(null,f__2907)))
{return cljs.core.cons.call(null,f__2907,filter.call(null,pred,r__2908));
} else
{return filter.call(null,pred,r__2908);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2910 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2910.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2909_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2909_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2917 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2918 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2911))
{var s__2912 = temp__3698__auto____2911;

var p__2913 = cljs.core.take.call(null,n,s__2912);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2913))))
{return cljs.core.cons.call(null,p__2913,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2912)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2919 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2914 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2914))
{var s__2915 = temp__3698__auto____2914;

var p__2916 = cljs.core.take.call(null,n,s__2915);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2916))))
{return cljs.core.cons.call(null,p__2916,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2915)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2916,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2917.call(this,n,step);
case  3 :
return partition__2918.call(this,n,step,pad);
case  4 :
return partition__2919.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2925 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2926 = (function (m,ks,not_found){
var sentinel__2921 = cljs.core.lookup_sentinel;
var m__2922 = m;
var ks__2923 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2923))
{var m__2924 = cljs.core.get.call(null,m__2922,cljs.core.first.call(null,ks__2923),sentinel__2921);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2921,m__2924)))
{return not_found;
} else
{{
var G__2928 = sentinel__2921;
var G__2929 = m__2924;
var G__2930 = cljs.core.next.call(null,ks__2923);
sentinel__2921 = G__2928;
m__2922 = G__2929;
ks__2923 = G__2930;
continue;
}
}
} else
{return m__2922;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2925.call(this,m,ks);
case  3 :
return get_in__2926.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2931,v){
var vec__2932__2933 = p__2931;
var k__2934 = cljs.core.nth.call(null,vec__2932__2933,0,null);
var ks__2935 = cljs.core.nthnext.call(null,vec__2932__2933,1);

if(cljs.core.truth_(ks__2935))
{return cljs.core.assoc.call(null,m,k__2934,assoc_in.call(null,cljs.core.get.call(null,m,k__2934),ks__2935,v));
} else
{return cljs.core.assoc.call(null,m,k__2934,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2936,f,args){
var vec__2937__2938 = p__2936;
var k__2939 = cljs.core.nth.call(null,vec__2937__2938,0,null);
var ks__2940 = cljs.core.nthnext.call(null,vec__2937__2938,1);

if(cljs.core.truth_(ks__2940))
{return cljs.core.assoc.call(null,m,k__2939,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2939),ks__2940,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2939,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2939),args));
}
};
var update_in = function (m,p__2936,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2936, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2941){
var m = cljs.core.first(arglist__2941);
var p__2936 = cljs.core.first(cljs.core.next(arglist__2941));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2941)));
return update_in__delegate.call(this, m, p__2936, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2943 = this;
var new_array__2944 = cljs.core.aclone.call(null,this__2943.array);

new_array__2944.push(o);
return (new cljs.core.Vector(this__2943.meta,new_array__2944));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2945 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2945.array.length,0)))
{var vector_seq__2946 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2945.array.length)))
{return cljs.core.cons.call(null,(this__2945.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2946.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2947 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2948 = this;
var count__2949 = this__2948.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2949,0)))
{return (this__2948.array[cljs.core.dec.call(null,count__2949)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2950 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2950.array.length,0)))
{var new_array__2951 = cljs.core.aclone.call(null,this__2950.array);

new_array__2951.pop();
return (new cljs.core.Vector(this__2950.meta,new_array__2951));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2952 = this;
return (new cljs.core.Vector(meta,this__2952.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2953 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2953.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2967 = null;
var G__2967__2968 = (function (coll,n){
var this__2954 = this;
if(cljs.core.truth_((function (){var and__3546__auto____2955 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____2955))
{return cljs.core._LT_.call(null,n,this__2954.array.length);
} else
{return and__3546__auto____2955;
}
})()))
{return (this__2954.array[n]);
} else
{return null;
}
});
var G__2967__2969 = (function (coll,n,not_found){
var this__2956 = this;
if(cljs.core.truth_((function (){var and__3546__auto____2957 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____2957))
{return cljs.core._LT_.call(null,n,this__2956.array.length);
} else
{return and__3546__auto____2957;
}
})()))
{return (this__2956.array[n]);
} else
{return not_found;
}
});
G__2967 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2967__2968.call(this,coll,n);
case  3 :
return G__2967__2969.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2967;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2958 = this;
return this__2958.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2971 = null;
var G__2971__2972 = (function (v,f){
var this__2959 = this;
return cljs.core.ci_reduce.call(null,this__2959.array,f);
});
var G__2971__2973 = (function (v,f,start){
var this__2960 = this;
return cljs.core.ci_reduce.call(null,this__2960.array,f,start);
});
G__2971 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2971__2972.call(this,v,f);
case  3 :
return G__2971__2973.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2971;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2961 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2962 = this;
return this__2962.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2963 = this;
var new_array__2964 = cljs.core.aclone.call(null,this__2963.array);

(new_array__2964[k] = v);
return (new cljs.core.Vector(this__2963.meta,new_array__2964));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2975 = null;
var G__2975__2976 = (function (coll,k){
var this__2965 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2975__2977 = (function (coll,k,not_found){
var this__2966 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2975 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2975__2976.call(this,coll,k);
case  3 :
return G__2975__2977.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2975;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2979 = null;
var G__2979__2980 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2979__2981 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2979 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2979__2980.call(this,_,k);
case  3 :
return G__2979__2981.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2979;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2983){
var args = cljs.core.seq( arglist__2983 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2984 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2985 = array.length;

var i__2986 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2986,len__2985)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2986]))))
{return i__2986;
} else
{{
var G__2987 = cljs.core._PLUS_.call(null,i__2986,incr);
i__2986 = G__2987;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2989 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2990 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____2988 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____2988))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____2988;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2989.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2990.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2993 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2994 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2995 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2995.keys.length)))
{return cljs.core.map.call(null,(function (p1__2992_SHARP_){
return cljs.core.vector.call(null,p1__2992_SHARP_,(this__2995.strobj[p1__2992_SHARP_]));
}),this__2995.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2996 = this;
return (new cljs.core.ObjMap(meta,this__2996.keys,this__2996.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2997 = this;
if(cljs.core.truth_((function (){var and__3546__auto____2998 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____2998))
{return this__2997.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____2998;
}
})()))
{var new_keys__2999 = cljs.core.aclone.call(null,this__2997.keys);
var new_strobj__3000 = goog.object.clone.call(null,this__2997.strobj);

new_keys__2999.splice(cljs.core.scan_array.call(null,1,k,new_keys__2999),1);
cljs.core.js_delete.call(null,new_strobj__3000,k);
return (new cljs.core.ObjMap(this__2997.meta,new_keys__2999,new_strobj__3000));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3001 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3001.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3002 = this;
return this__3002.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3003 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3004 = this;
return this__3004.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3005 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3006 = goog.object.clone.call(null,this__3005.strobj);
var overwrite_QMARK___3007 = new_strobj__3006.hasOwnProperty(k);

(new_strobj__3006[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3007))
{return (new cljs.core.ObjMap(this__3005.meta,this__3005.keys,new_strobj__3006));
} else
{var new_keys__3008 = cljs.core.aclone.call(null,this__3005.keys);

new_keys__3008.push(k);
return (new cljs.core.ObjMap(this__3005.meta,new_keys__3008,new_strobj__3006));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3005.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3009 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3009.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3012 = null;
var G__3012__3013 = (function (coll,k){
var this__3010 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3012__3014 = (function (coll,k,not_found){
var this__3011 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3011.strobj,(this__3011.strobj[k]),not_found);
});
G__3012 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3012__3013.call(this,coll,k);
case  3 :
return G__3012__3014.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3012;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3017 = null;
var G__3017__3018 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3017__3019 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3017 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3017__3018.call(this,_,k);
case  3 :
return G__3017__3019.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3017;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3021 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3022 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3023 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3023.count)))
{var hashes__3024 = cljs.core.js_keys.call(null,this__3023.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3016_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3023.hashobj[p1__3016_SHARP_])));
}),hashes__3024);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3025 = this;
return (new cljs.core.HashMap(meta,this__3025.count,this__3025.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3026 = this;
var h__3027 = cljs.core.hash.call(null,k);
var bucket__3028 = (this__3026.hashobj[h__3027]);
var i__3029 = (cljs.core.truth_(bucket__3028)?cljs.core.scan_array.call(null,2,k,bucket__3028):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3029)))
{return coll;
} else
{var new_hashobj__3030 = goog.object.clone.call(null,this__3026.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3028.length)))
{cljs.core.js_delete.call(null,new_hashobj__3030,h__3027);
} else
{var new_bucket__3031 = cljs.core.aclone.call(null,bucket__3028);

new_bucket__3031.splice(i__3029,2);
(new_hashobj__3030[h__3027] = new_bucket__3031);
}
return (new cljs.core.HashMap(this__3026.meta,cljs.core.dec.call(null,this__3026.count),new_hashobj__3030));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3032 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3032.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3033 = this;
return this__3033.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3035 = this;
return this__3035.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3036 = this;
var h__3037 = cljs.core.hash.call(null,k);
var bucket__3038 = (this__3036.hashobj[h__3037]);

if(cljs.core.truth_(bucket__3038))
{var new_bucket__3039 = cljs.core.aclone.call(null,bucket__3038);
var new_hashobj__3040 = goog.object.clone.call(null,this__3036.hashobj);

(new_hashobj__3040[h__3037] = new_bucket__3039);
var temp__3695__auto____3041 = cljs.core.scan_array.call(null,2,k,new_bucket__3039);

if(cljs.core.truth_(temp__3695__auto____3041))
{var i__3042 = temp__3695__auto____3041;

(new_bucket__3039[cljs.core.inc.call(null,i__3042)] = v);
return (new cljs.core.HashMap(this__3036.meta,this__3036.count,new_hashobj__3040));
} else
{new_bucket__3039.push(k,v);
return (new cljs.core.HashMap(this__3036.meta,cljs.core.inc.call(null,this__3036.count),new_hashobj__3040));
}
} else
{var new_hashobj__3043 = goog.object.clone.call(null,this__3036.hashobj);

(new_hashobj__3043[h__3037] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3036.meta,cljs.core.inc.call(null,this__3036.count),new_hashobj__3043));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3044 = this;
var bucket__3045 = (this__3044.hashobj[cljs.core.hash.call(null,k)]);
var i__3046 = (cljs.core.truth_(bucket__3045)?cljs.core.scan_array.call(null,2,k,bucket__3045):null);

if(cljs.core.truth_(i__3046))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3051 = null;
var G__3051__3052 = (function (coll,k){
var this__3047 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3051__3053 = (function (coll,k,not_found){
var this__3048 = this;
var bucket__3049 = (this__3048.hashobj[cljs.core.hash.call(null,k)]);
var i__3050 = (cljs.core.truth_(bucket__3049)?cljs.core.scan_array.call(null,2,k,bucket__3049):null);

if(cljs.core.truth_(i__3050))
{return (bucket__3049[cljs.core.inc.call(null,i__3050)]);
} else
{return not_found;
}
});
G__3051 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3051__3052.call(this,coll,k);
case  3 :
return G__3051__3053.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3051;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3055 = ks.length;

var i__3056 = 0;
var out__3057 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3056,len__3055)))
{{
var G__3058 = cljs.core.inc.call(null,i__3056);
var G__3059 = cljs.core.assoc.call(null,out__3057,(ks[i__3056]),(vs[i__3056]));
i__3056 = G__3058;
out__3057 = G__3059;
continue;
}
} else
{return out__3057;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3060 = null;
var G__3060__3061 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3060__3062 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3060 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3060__3061.call(this,_,k);
case  3 :
return G__3060__3062.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3060;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3064 = cljs.core.seq.call(null,keyvals);
var out__3065 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3064))
{{
var G__3066 = cljs.core.nnext.call(null,in$__3064);
var G__3067 = cljs.core.assoc.call(null,out__3065,cljs.core.first.call(null,in$__3064),cljs.core.second.call(null,in$__3064));
in$__3064 = G__3066;
out__3065 = G__3067;
continue;
}
} else
{return out__3065;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3068){
var keyvals = cljs.core.seq( arglist__3068 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3069_SHARP_,p2__3070_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3071 = p1__3069_SHARP_;

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3070_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3072){
var maps = cljs.core.seq( arglist__3072 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3075 = (function (m,e){
var k__3073 = cljs.core.first.call(null,e);
var v__3074 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3073)))
{return cljs.core.assoc.call(null,m,k__3073,f.call(null,cljs.core.get.call(null,m,k__3073),v__3074));
} else
{return cljs.core.assoc.call(null,m,k__3073,v__3074);
}
});
var merge2__3077 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3075,(function (){var or__3548__auto____3076 = m1;

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3077,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3078){
var f = cljs.core.first(arglist__3078);
var maps = cljs.core.rest(arglist__3078);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3080 = cljs.core.ObjMap.fromObject([],{});
var keys__3081 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3081))
{var key__3082 = cljs.core.first.call(null,keys__3081);
var entry__3083 = cljs.core.get.call(null,map,key__3082);

{
var G__3084 = (cljs.core.truth_(entry__3083)?cljs.core.assoc.call(null,ret__3080,key__3082,entry__3083):ret__3080);
var G__3085 = cljs.core.next.call(null,keys__3081);
ret__3080 = G__3084;
keys__3081 = G__3085;
continue;
}
} else
{return ret__3080;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3086 = this;
return (new cljs.core.Set(this__3086.meta,cljs.core.dissoc.call(null,this__3086.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3087 = this;
var and__3546__auto____3088 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3088))
{var and__3546__auto____3089 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3089))
{return cljs.core.every_QMARK_.call(null,(function (p1__3079_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3079_SHARP_);
}),other);
} else
{return and__3546__auto____3089;
}
} else
{return and__3546__auto____3088;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3090 = this;
return (new cljs.core.Set(this__3090.meta,cljs.core.assoc.call(null,this__3090.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3091 = this;
return cljs.core.keys.call(null,this__3091.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3092 = this;
return (new cljs.core.Set(meta,this__3092.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3093 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3093.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3094 = this;
return this__3094.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3095 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3096 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3099 = null;
var G__3099__3100 = (function (coll,v){
var this__3097 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3099__3101 = (function (coll,v,not_found){
var this__3098 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3098.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3099 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3099__3100.call(this,coll,v);
case  3 :
return G__3099__3101.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3099;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3103 = null;
var G__3103__3104 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3103__3105 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3103 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3103__3104.call(this,_,k);
case  3 :
return G__3103__3105.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3103;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3108 = cljs.core.seq.call(null,coll);
var out__3109 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3108))))
{{
var G__3110 = cljs.core.rest.call(null,in$__3108);
var G__3111 = cljs.core.conj.call(null,out__3109,cljs.core.first.call(null,in$__3108));
in$__3108 = G__3110;
out__3109 = G__3111;
continue;
}
} else
{return out__3109;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3112 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3113 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3113))
{var e__3114 = temp__3695__auto____3113;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3114));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3112,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3107_SHARP_){
var temp__3695__auto____3115 = cljs.core.find.call(null,smap,p1__3107_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3115))
{var e__3116 = temp__3695__auto____3115;

return cljs.core.second.call(null,e__3116);
} else
{return p1__3107_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3124 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3117,seen){
while(true){
var vec__3118__3119 = p__3117;
var f__3120 = cljs.core.nth.call(null,vec__3118__3119,0,null);
var xs__3121 = vec__3118__3119;

var temp__3698__auto____3122 = cljs.core.seq.call(null,xs__3121);

if(cljs.core.truth_(temp__3698__auto____3122))
{var s__3123 = temp__3698__auto____3122;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3120)))
{{
var G__3125 = cljs.core.rest.call(null,s__3123);
var G__3126 = seen;
p__3117 = G__3125;
seen = G__3126;
continue;
}
} else
{return cljs.core.cons.call(null,f__3120,step.call(null,cljs.core.rest.call(null,s__3123),cljs.core.conj.call(null,seen,f__3120)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3124.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3127 = cljs.core.Vector.fromArray([]);
var s__3128 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3128)))
{{
var G__3129 = cljs.core.conj.call(null,ret__3127,cljs.core.first.call(null,s__3128));
var G__3130 = cljs.core.next.call(null,s__3128);
ret__3127 = G__3129;
s__3128 = G__3130;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3127);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3131 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3132 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3132,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3132));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3133 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3134 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3134,-1)))
{return cljs.core.subs.call(null,x,2,i__3134);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3137 = cljs.core.ObjMap.fromObject([],{});
var ks__3138 = cljs.core.seq.call(null,keys);
var vs__3139 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3140 = ks__3138;

if(cljs.core.truth_(and__3546__auto____3140))
{return vs__3139;
} else
{return and__3546__auto____3140;
}
})()))
{{
var G__3141 = cljs.core.assoc.call(null,map__3137,cljs.core.first.call(null,ks__3138),cljs.core.first.call(null,vs__3139));
var G__3142 = cljs.core.next.call(null,ks__3138);
var G__3143 = cljs.core.next.call(null,vs__3139);
map__3137 = G__3141;
ks__3138 = G__3142;
vs__3139 = G__3143;
continue;
}
} else
{return map__3137;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3146 = (function (k,x){
return x;
});
var max_key__3147 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3148 = (function() { 
var G__3150__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3135_SHARP_,p2__3136_SHARP_){
return max_key.call(null,k,p1__3135_SHARP_,p2__3136_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3150 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3150__delegate.call(this, k, x, y, more);
};
G__3150.cljs$lang$maxFixedArity = 3;
G__3150.cljs$lang$applyTo = (function (arglist__3151){
var k = cljs.core.first(arglist__3151);
var x = cljs.core.first(cljs.core.next(arglist__3151));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3151)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3151)));
return G__3150__delegate.call(this, k, x, y, more);
});
return G__3150;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3146.call(this,k,x);
case  3 :
return max_key__3147.call(this,k,x,y);
default:
return max_key__3148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3148.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3152 = (function (k,x){
return x;
});
var min_key__3153 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3154 = (function() { 
var G__3156__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3144_SHARP_,p2__3145_SHARP_){
return min_key.call(null,k,p1__3144_SHARP_,p2__3145_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3156 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3156__delegate.call(this, k, x, y, more);
};
G__3156.cljs$lang$maxFixedArity = 3;
G__3156.cljs$lang$applyTo = (function (arglist__3157){
var k = cljs.core.first(arglist__3157);
var x = cljs.core.first(cljs.core.next(arglist__3157));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3157)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3157)));
return G__3156__delegate.call(this, k, x, y, more);
});
return G__3156;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3152.call(this,k,x);
case  3 :
return min_key__3153.call(this,k,x,y);
default:
return min_key__3154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3154.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3160 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3161 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3158 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3158))
{var s__3159 = temp__3698__auto____3158;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3159),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3159)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3160.call(this,n,step);
case  3 :
return partition_all__3161.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3163))
{var s__3164 = temp__3698__auto____3163;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3164))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3164),take_while.call(null,pred,cljs.core.rest.call(null,s__3164)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3165 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3166 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3167 = this;
return this__3167.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3168 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3168.meta,cljs.core._PLUS_.call(null,this__3168.start,this__3168.step),this__3168.end,this__3168.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3169 = this;
var comp__3170 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3169.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3170.call(null,this__3169.start,this__3169.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3171 = this;
return (new cljs.core.Range(meta,this__3171.start,this__3171.end,this__3171.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3172 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3172.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3182 = null;
var G__3182__3183 = (function (rng,n){
var this__3173 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3173.start,cljs.core._STAR_.call(null,n,this__3173.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3174 = cljs.core._GT_.call(null,this__3173.start,this__3173.end);

if(cljs.core.truth_(and__3546__auto____3174))
{return cljs.core._EQ_.call(null,this__3173.step,0);
} else
{return and__3546__auto____3174;
}
})()))
{return this__3173.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3182__3184 = (function (rng,n,not_found){
var this__3175 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3175.start,cljs.core._STAR_.call(null,n,this__3175.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3176 = cljs.core._GT_.call(null,this__3175.start,this__3175.end);

if(cljs.core.truth_(and__3546__auto____3176))
{return cljs.core._EQ_.call(null,this__3175.step,0);
} else
{return and__3546__auto____3176;
}
})()))
{return this__3175.start;
} else
{return not_found;
}
}
});
G__3182 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3182__3183.call(this,rng,n);
case  3 :
return G__3182__3184.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3182;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3177 = this;
return this__3177.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3186 = null;
var G__3186__3187 = (function (rng,f){
var this__3178 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3186__3188 = (function (rng,f,s){
var this__3179 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3186 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3186__3187.call(this,rng,f);
case  3 :
return G__3186__3188.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3186;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3180 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3181 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3181.end,this__3181.start),this__3181.step));
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3190 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3191 = (function (end){
return range.call(null,0,end,1);
});
var range__3192 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3193 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3190.call(this);
case  1 :
return range__3191.call(this,start);
case  2 :
return range__3192.call(this,start,end);
case  3 :
return range__3193.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3195))
{var s__3196 = temp__3698__auto____3195;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3196),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3196)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3198))
{var s__3199 = temp__3698__auto____3198;

var fst__3200 = cljs.core.first.call(null,s__3199);
var fv__3201 = f.call(null,fst__3200);
var run__3202 = cljs.core.cons.call(null,fst__3200,cljs.core.take_while.call(null,(function (p1__3197_SHARP_){
return cljs.core._EQ_.call(null,fv__3201,f.call(null,p1__3197_SHARP_));
}),cljs.core.next.call(null,s__3199)));

return cljs.core.cons.call(null,run__3202,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3202),s__3199))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3217 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3213))
{var s__3214 = temp__3695__auto____3213;

return reductions.call(null,f,cljs.core.first.call(null,s__3214),cljs.core.rest.call(null,s__3214));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3218 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3215 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3215))
{var s__3216 = temp__3698__auto____3215;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3216)),cljs.core.rest.call(null,s__3216));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3217.call(this,f,init);
case  3 :
return reductions__3218.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3221 = (function (f){
return (function() {
var G__3226 = null;
var G__3226__3227 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3226__3228 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3226__3229 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3226__3230 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3226__3231 = (function() { 
var G__3233__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3233 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3233__delegate.call(this, x, y, z, args);
};
G__3233.cljs$lang$maxFixedArity = 3;
G__3233.cljs$lang$applyTo = (function (arglist__3234){
var x = cljs.core.first(arglist__3234);
var y = cljs.core.first(cljs.core.next(arglist__3234));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3234)));
return G__3233__delegate.call(this, x, y, z, args);
});
return G__3233;
})()
;
G__3226 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3226__3227.call(this);
case  1 :
return G__3226__3228.call(this,x);
case  2 :
return G__3226__3229.call(this,x,y);
case  3 :
return G__3226__3230.call(this,x,y,z);
default:
return G__3226__3231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3226.cljs$lang$maxFixedArity = 3;
G__3226.cljs$lang$applyTo = G__3226__3231.cljs$lang$applyTo;
return G__3226;
})()
});
var juxt__3222 = (function (f,g){
return (function() {
var G__3235 = null;
var G__3235__3236 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3235__3237 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3235__3238 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3235__3239 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3235__3240 = (function() { 
var G__3242__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3242 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3242__delegate.call(this, x, y, z, args);
};
G__3242.cljs$lang$maxFixedArity = 3;
G__3242.cljs$lang$applyTo = (function (arglist__3243){
var x = cljs.core.first(arglist__3243);
var y = cljs.core.first(cljs.core.next(arglist__3243));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3243)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3243)));
return G__3242__delegate.call(this, x, y, z, args);
});
return G__3242;
})()
;
G__3235 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3235__3236.call(this);
case  1 :
return G__3235__3237.call(this,x);
case  2 :
return G__3235__3238.call(this,x,y);
case  3 :
return G__3235__3239.call(this,x,y,z);
default:
return G__3235__3240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3235.cljs$lang$maxFixedArity = 3;
G__3235.cljs$lang$applyTo = G__3235__3240.cljs$lang$applyTo;
return G__3235;
})()
});
var juxt__3223 = (function (f,g,h){
return (function() {
var G__3244 = null;
var G__3244__3245 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3244__3246 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3244__3247 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3244__3248 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3244__3249 = (function() { 
var G__3251__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3251__delegate.call(this, x, y, z, args);
};
G__3251.cljs$lang$maxFixedArity = 3;
G__3251.cljs$lang$applyTo = (function (arglist__3252){
var x = cljs.core.first(arglist__3252);
var y = cljs.core.first(cljs.core.next(arglist__3252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3252)));
return G__3251__delegate.call(this, x, y, z, args);
});
return G__3251;
})()
;
G__3244 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3244__3245.call(this);
case  1 :
return G__3244__3246.call(this,x);
case  2 :
return G__3244__3247.call(this,x,y);
case  3 :
return G__3244__3248.call(this,x,y,z);
default:
return G__3244__3249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3244.cljs$lang$maxFixedArity = 3;
G__3244.cljs$lang$applyTo = G__3244__3249.cljs$lang$applyTo;
return G__3244;
})()
});
var juxt__3224 = (function() { 
var G__3253__delegate = function (f,g,h,fs){
var fs__3220 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3254 = null;
var G__3254__3255 = (function (){
return cljs.core.reduce.call(null,(function (p1__3203_SHARP_,p2__3204_SHARP_){
return cljs.core.conj.call(null,p1__3203_SHARP_,p2__3204_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3220);
});
var G__3254__3256 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3205_SHARP_,p2__3206_SHARP_){
return cljs.core.conj.call(null,p1__3205_SHARP_,p2__3206_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3220);
});
var G__3254__3257 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3207_SHARP_,p2__3208_SHARP_){
return cljs.core.conj.call(null,p1__3207_SHARP_,p2__3208_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3220);
});
var G__3254__3258 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3209_SHARP_,p2__3210_SHARP_){
return cljs.core.conj.call(null,p1__3209_SHARP_,p2__3210_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3220);
});
var G__3254__3259 = (function() { 
var G__3261__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3211_SHARP_,p2__3212_SHARP_){
return cljs.core.conj.call(null,p1__3211_SHARP_,cljs.core.apply.call(null,p2__3212_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3220);
};
var G__3261 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3261__delegate.call(this, x, y, z, args);
};
G__3261.cljs$lang$maxFixedArity = 3;
G__3261.cljs$lang$applyTo = (function (arglist__3262){
var x = cljs.core.first(arglist__3262);
var y = cljs.core.first(cljs.core.next(arglist__3262));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3262)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3262)));
return G__3261__delegate.call(this, x, y, z, args);
});
return G__3261;
})()
;
G__3254 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3254__3255.call(this);
case  1 :
return G__3254__3256.call(this,x);
case  2 :
return G__3254__3257.call(this,x,y);
case  3 :
return G__3254__3258.call(this,x,y,z);
default:
return G__3254__3259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3254.cljs$lang$maxFixedArity = 3;
G__3254.cljs$lang$applyTo = G__3254__3259.cljs$lang$applyTo;
return G__3254;
})()
};
var G__3253 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3253__delegate.call(this, f, g, h, fs);
};
G__3253.cljs$lang$maxFixedArity = 3;
G__3253.cljs$lang$applyTo = (function (arglist__3263){
var f = cljs.core.first(arglist__3263);
var g = cljs.core.first(cljs.core.next(arglist__3263));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3263)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3263)));
return G__3253__delegate.call(this, f, g, h, fs);
});
return G__3253;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3221.call(this,f);
case  2 :
return juxt__3222.call(this,f,g);
case  3 :
return juxt__3223.call(this,f,g,h);
default:
return juxt__3224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3224.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3265 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3268 = cljs.core.next.call(null,coll);
coll = G__3268;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3266 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3264 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3264))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3546__auto____3264;
}
})()))
{{
var G__3269 = cljs.core.dec.call(null,n);
var G__3270 = cljs.core.next.call(null,coll);
n = G__3269;
coll = G__3270;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3265.call(this,n);
case  2 :
return dorun__3266.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3271 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3272 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3271.call(this,n);
case  2 :
return doall__3272.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3274 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3274),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3274),1)))
{return cljs.core.first.call(null,matches__3274);
} else
{return cljs.core.vec.call(null,matches__3274);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3275 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3275)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3275),1)))
{return cljs.core.first.call(null,matches__3275);
} else
{return cljs.core.vec.call(null,matches__3275);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3276 = cljs.core.re_find.call(null,re,s);
var match_idx__3277 = s.search(re);
var match_str__3278 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3276))?cljs.core.first.call(null,match_data__3276):match_data__3276);
var post_match__3279 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3277,cljs.core.count.call(null,match_str__3278)));

if(cljs.core.truth_(match_data__3276))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3276,re_seq.call(null,re,post_match__3279));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3280_SHARP_){
return print_one.call(null,p1__3280_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3281 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3281))
{var and__3546__auto____3284 = (function (){var x__163__auto____3282 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3283 = x__163__auto____3282;

if(cljs.core.truth_(and__3546__auto____3283))
{return x__163__auto____3282.cljs$core$IMeta$;
} else
{return and__3546__auto____3283;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__163__auto____3282);
}
})();

if(cljs.core.truth_(and__3546__auto____3284))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3284;
}
} else
{return and__3546__auto____3281;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__163__auto____3285 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3286 = x__163__auto____3285;

if(cljs.core.truth_(and__3546__auto____3286))
{return x__163__auto____3285.cljs$core$IPrintable$;
} else
{return and__3546__auto____3286;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__163__auto____3285);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3287 = cljs.core.first.call(null,objs);
var sb__3288 = (new goog.string.StringBuffer());

var G__3289__3290 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3289__3290))
{var obj__3291 = cljs.core.first.call(null,G__3289__3290);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3291,first_obj__3287)))
{} else
{sb__3288.append(" ");
}
var G__3292__3293 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3291,opts));

while(true){
if(cljs.core.truth_(G__3292__3293))
{var string__3294 = cljs.core.first.call(null,G__3292__3293);

sb__3288.append(string__3294);
{
var G__3295 = cljs.core.next.call(null,G__3292__3293);
G__3292__3293 = G__3295;
continue;
}
} else
{}
break;
}
{
var G__3296 = cljs.core.next.call(null,G__3289__3290);
G__3289__3290 = G__3296;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3288);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3297 = cljs.core.first.call(null,objs);

var G__3298__3299 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3298__3299))
{var obj__3300 = cljs.core.first.call(null,G__3298__3299);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3300,first_obj__3297)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3301__3302 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3300,opts));

while(true){
if(cljs.core.truth_(G__3301__3302))
{var string__3303 = cljs.core.first.call(null,G__3301__3302);

cljs.core.string_print.call(null,string__3303);
{
var G__3304 = cljs.core.next.call(null,G__3301__3302);
G__3301__3302 = G__3304;
continue;
}
} else
{}
break;
}
{
var G__3305 = cljs.core.next.call(null,G__3298__3299);
G__3298__3299 = G__3305;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3306){
var objs = cljs.core.seq( arglist__3306 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3307){
var objs = cljs.core.seq( arglist__3307 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3308){
var objs = cljs.core.seq( arglist__3308 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3309){
var objs = cljs.core.seq( arglist__3309 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3310){
var objs = cljs.core.seq( arglist__3310 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3311 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3311,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3312 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3312))
{var nspc__3313 = temp__3698__auto____3312;

return cljs.core.str.call(null,nspc__3313,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3314 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3314))
{var nspc__3315 = temp__3698__auto____3314;

return cljs.core.str.call(null,nspc__3315,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3316 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3316,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3317 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3317.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3318 = this;
return this__3318.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3319 = this;
return this__3319.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3320 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3327 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3328 = (function() { 
var G__3330__delegate = function (x,p__3321){
var map__3322__3323 = p__3321;
var map__3322__3324 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3322__3323))?cljs.core.apply.call(null,cljs.core.hash_map,map__3322__3323):map__3322__3323);
var validator__3325 = cljs.core.get.call(null,map__3322__3324,"﷐'validator");
var meta__3326 = cljs.core.get.call(null,map__3322__3324,"﷐'meta");

return (new cljs.core.Atom(x,meta__3326,validator__3325));
};
var G__3330 = function (x,var_args){
var p__3321 = null;
if (goog.isDef(var_args)) {
  p__3321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3330__delegate.call(this, x, p__3321);
};
G__3330.cljs$lang$maxFixedArity = 1;
G__3330.cljs$lang$applyTo = (function (arglist__3331){
var x = cljs.core.first(arglist__3331);
var p__3321 = cljs.core.rest(arglist__3331);
return G__3330__delegate.call(this, x, p__3321);
});
return G__3330;
})()
;
atom = function(x,var_args){
var p__3321 = var_args;
switch(arguments.length){
case  1 :
return atom__3327.call(this,x);
default:
return atom__3328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3328.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3698__auto____3332 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3332))
{var v__3333 = temp__3698__auto____3332;

if(cljs.core.truth_(v__3333.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3334 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3335 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3336 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3337 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3338 = (function() { 
var G__3340__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3340 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3340__delegate.call(this, a, f, x, y, z, more);
};
G__3340.cljs$lang$maxFixedArity = 5;
G__3340.cljs$lang$applyTo = (function (arglist__3341){
var a = cljs.core.first(arglist__3341);
var f = cljs.core.first(cljs.core.next(arglist__3341));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3341)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3341))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3341)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3341)))));
return G__3340__delegate.call(this, a, f, x, y, z, more);
});
return G__3340;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3334.call(this,a,f);
case  3 :
return swap_BANG___3335.call(this,a,f,x);
case  4 :
return swap_BANG___3336.call(this,a,f,x,y);
case  5 :
return swap_BANG___3337.call(this,a,f,x,y,z);
default:
return swap_BANG___3338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3338.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3342){
var iref = cljs.core.first(arglist__3342);
var f = cljs.core.first(cljs.core.next(arglist__3342));
var args = cljs.core.rest(cljs.core.next(arglist__3342));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3343 = (function (){
return gensym.call(null,"G__");
});
var gensym__3344 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3343.call(this);
case  1 :
return gensym__3344.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3346 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3346.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3347 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3347.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3347.state,this__3347.f);
}
return cljs.core.deref.call(null,this__3347.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3348){
var body = cljs.core.seq( arglist__3348 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3349__3350 = options;
var map__3349__3351 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3349__3350))?cljs.core.apply.call(null,cljs.core.hash_map,map__3349__3350):map__3349__3350);
var keywordize_keys__3352 = cljs.core.get.call(null,map__3349__3351,"﷐'keywordize-keys");
var keyfn__3353 = (cljs.core.truth_(keywordize_keys__3352)?cljs.core.keyword:cljs.core.str);
var f__3359 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__217__auto____3358 = (function iter__3354(s__3355){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3355__3356 = s__3355;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3355__3356)))
{var k__3357 = cljs.core.first.call(null,s__3355__3356);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3353.call(null,k__3357),thisfn.call(null,(x[k__3357]))]),iter__3354.call(null,cljs.core.rest.call(null,s__3355__3356)));
} else
{return null;
}
break;
}
})));
});

return iter__217__auto____3358.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3359.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3360){
var x = cljs.core.first(arglist__3360);
var options = cljs.core.rest(arglist__3360);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3361 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3365__delegate = function (args){
var temp__3695__auto____3362 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3361),args);

if(cljs.core.truth_(temp__3695__auto____3362))
{var v__3363 = temp__3695__auto____3362;

return v__3363;
} else
{var ret__3364 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3361,cljs.core.assoc,args,ret__3364);
return ret__3364;
}
};
var G__3365 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3365__delegate.call(this, args);
};
G__3365.cljs$lang$maxFixedArity = 0;
G__3365.cljs$lang$applyTo = (function (arglist__3366){
var args = cljs.core.seq( arglist__3366 );;
return G__3365__delegate.call(this, args);
});
return G__3365;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3368 = (function (f){
while(true){
var ret__3367 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3367)))
{{
var G__3371 = ret__3367;
f = G__3371;
continue;
}
} else
{return ret__3367;
}
break;
}
});
var trampoline__3369 = (function() { 
var G__3372__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3372 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3372__delegate.call(this, f, args);
};
G__3372.cljs$lang$maxFixedArity = 1;
G__3372.cljs$lang$applyTo = (function (arglist__3373){
var f = cljs.core.first(arglist__3373);
var args = cljs.core.rest(arglist__3373);
return G__3372__delegate.call(this, f, args);
});
return G__3372;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3368.call(this,f);
default:
return trampoline__3369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3369.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3374 = (function (){
return rand.call(null,1);
});
var rand__3375 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3374.call(this);
case  1 :
return rand__3375.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3377 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3377,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3377,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3386 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3387 = (function (h,child,parent){
var or__3548__auto____3378 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3378))
{return or__3548__auto____3378;
} else
{var or__3548__auto____3379 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3379))
{return or__3548__auto____3379;
} else
{var and__3546__auto____3380 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3380))
{var and__3546__auto____3381 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3381))
{var and__3546__auto____3382 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3382))
{var ret__3383 = true;
var i__3384 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3385 = cljs.core.not.call(null,ret__3383);

if(cljs.core.truth_(or__3548__auto____3385))
{return or__3548__auto____3385;
} else
{return cljs.core._EQ_.call(null,i__3384,cljs.core.count.call(null,parent));
}
})()))
{return ret__3383;
} else
{{
var G__3389 = isa_QMARK_.call(null,h,child.call(null,i__3384),parent.call(null,i__3384));
var G__3390 = cljs.core.inc.call(null,i__3384);
ret__3383 = G__3389;
i__3384 = G__3390;
continue;
}
}
break;
}
} else
{return and__3546__auto____3382;
}
} else
{return and__3546__auto____3381;
}
} else
{return and__3546__auto____3380;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3386.call(this,h,child);
case  3 :
return isa_QMARK___3387.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3391 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3392 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3391.call(this,h);
case  2 :
return parents__3392.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3394 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3395 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3394.call(this,h);
case  2 :
return ancestors__3395.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3397 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3398 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3397.call(this,h);
case  2 :
return descendants__3398.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3408 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3409 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3403 = "﷐'parents".call(null,h);
var td__3404 = "﷐'descendants".call(null,h);
var ta__3405 = "﷐'ancestors".call(null,h);
var tf__3406 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3407 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3403.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3405.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3405.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3403,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3406.call(null,"﷐'ancestors".call(null,h),tag,td__3404,parent,ta__3405),"﷐'descendants":tf__3406.call(null,"﷐'descendants".call(null,h),parent,ta__3405,tag,td__3404)});
})());

if(cljs.core.truth_(or__3548__auto____3407))
{return or__3548__auto____3407;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3408.call(this,h,tag);
case  3 :
return derive__3409.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3415 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3416 = (function (h,tag,parent){
var parentMap__3411 = "﷐'parents".call(null,h);
var childsParents__3412 = (cljs.core.truth_(parentMap__3411.call(null,tag))?cljs.core.disj.call(null,parentMap__3411.call(null,tag),parent):cljs.core.set([]));
var newParents__3413 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3412))?cljs.core.assoc.call(null,parentMap__3411,tag,childsParents__3412):cljs.core.dissoc.call(null,parentMap__3411,tag));
var deriv_seq__3414 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3400_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3400_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3400_SHARP_),cljs.core.second.call(null,p1__3400_SHARP_)));
}),cljs.core.seq.call(null,newParents__3413)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3411.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3401_SHARP_,p2__3402_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3401_SHARP_,p2__3402_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3414));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3415.call(this,h,tag);
case  3 :
return underive__3416.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3418 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3420 = (cljs.core.truth_((function (){var and__3546__auto____3419 = xprefs__3418;

if(cljs.core.truth_(and__3546__auto____3419))
{return xprefs__3418.call(null,y);
} else
{return and__3546__auto____3419;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3420))
{return or__3548__auto____3420;
} else
{var or__3548__auto____3422 = (function (){var ps__3421 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3421))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3421),prefer_table)))
{} else
{}
{
var G__3425 = cljs.core.rest.call(null,ps__3421);
ps__3421 = G__3425;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3422))
{return or__3548__auto____3422;
} else
{var or__3548__auto____3424 = (function (){var ps__3423 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3423))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3423),y,prefer_table)))
{} else
{}
{
var G__3426 = cljs.core.rest.call(null,ps__3423);
ps__3423 = G__3426;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3424))
{return or__3548__auto____3424;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3427 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3427))
{return or__3548__auto____3427;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3436 = cljs.core.reduce.call(null,(function (be,p__3428){
var vec__3429__3430 = p__3428;
var k__3431 = cljs.core.nth.call(null,vec__3429__3430,0,null);
var ___3432 = cljs.core.nth.call(null,vec__3429__3430,1,null);
var e__3433 = vec__3429__3430;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3431)))
{var be2__3435 = (cljs.core.truth_((function (){var or__3548__auto____3434 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3434))
{return or__3548__auto____3434;
} else
{return cljs.core.dominates.call(null,k__3431,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3433:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3435),k__3431,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3431," and ",cljs.core.first.call(null,be2__3435),", and neither is preferred");
}
return be2__3435;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3436))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3436));
return cljs.core.second.call(null,best_entry__3436);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3437 = mf;

if(cljs.core.truth_(and__3546__auto____3437))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3437;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3438 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3438))
{return or__3548__auto____3438;
} else
{var or__3548__auto____3439 = (_reset["_"]);

if(cljs.core.truth_(or__3548__auto____3439))
{return or__3548__auto____3439;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3440 = mf;

if(cljs.core.truth_(and__3546__auto____3440))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3440;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3441 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3441))
{return or__3548__auto____3441;
} else
{var or__3548__auto____3442 = (_add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3442))
{return or__3548__auto____3442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3443 = mf;

if(cljs.core.truth_(and__3546__auto____3443))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3443;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3444 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3444))
{return or__3548__auto____3444;
} else
{var or__3548__auto____3445 = (_remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3445))
{return or__3548__auto____3445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3446 = mf;

if(cljs.core.truth_(and__3546__auto____3446))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3446;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3447 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3447))
{return or__3548__auto____3447;
} else
{var or__3548__auto____3448 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3448))
{return or__3548__auto____3448;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3449 = mf;

if(cljs.core.truth_(and__3546__auto____3449))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3449;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3450 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3450))
{return or__3548__auto____3450;
} else
{var or__3548__auto____3451 = (_get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3451))
{return or__3548__auto____3451;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3452 = mf;

if(cljs.core.truth_(and__3546__auto____3452))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3452;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3453 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3453))
{return or__3548__auto____3453;
} else
{var or__3548__auto____3454 = (_methods["_"]);

if(cljs.core.truth_(or__3548__auto____3454))
{return or__3548__auto____3454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3455 = mf;

if(cljs.core.truth_(and__3546__auto____3455))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3455;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3456 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3456))
{return or__3548__auto____3456;
} else
{var or__3548__auto____3457 = (_prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3457))
{return or__3548__auto____3457;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3458 = mf;

if(cljs.core.truth_(and__3546__auto____3458))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3458;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3459 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3459))
{return or__3548__auto____3459;
} else
{var or__3548__auto____3460 = (_invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3460))
{return or__3548__auto____3460;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3461 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3462 = cljs.core._get_method.call(null,mf,dispatch_val__3461);

if(cljs.core.truth_(target_fn__3462))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3461);
}
return cljs.core.apply.call(null,target_fn__3462,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3463 = this;
cljs.core.swap_BANG_.call(null,this__3463.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3463.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3463.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3463.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3464 = this;
cljs.core.swap_BANG_.call(null,this__3464.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3464.method_cache,this__3464.method_table,this__3464.cached_hierarchy,this__3464.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3465 = this;
cljs.core.swap_BANG_.call(null,this__3465.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3465.method_cache,this__3465.method_table,this__3465.cached_hierarchy,this__3465.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3466 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3466.cached_hierarchy),cljs.core.deref.call(null,this__3466.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3466.method_cache,this__3466.method_table,this__3466.cached_hierarchy,this__3466.hierarchy);
}
var temp__3695__auto____3467 = cljs.core.deref.call(null,this__3466.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3467))
{var target_fn__3468 = temp__3695__auto____3467;

return target_fn__3468;
} else
{var temp__3695__auto____3469 = cljs.core.find_and_cache_best_method.call(null,this__3466.name,dispatch_val,this__3466.hierarchy,this__3466.method_table,this__3466.prefer_table,this__3466.method_cache,this__3466.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3469))
{var target_fn__3470 = temp__3695__auto____3469;

return target_fn__3470;
} else
{return cljs.core.deref.call(null,this__3466.method_table).call(null,this__3466.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3471 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3471.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3471.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3471.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3471.method_cache,this__3471.method_table,this__3471.cached_hierarchy,this__3471.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3472 = this;
return cljs.core.deref.call(null,this__3472.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3473 = this;
return cljs.core.deref.call(null,this__3473.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3474 = this;
return cljs.core.do_invoke.call(null,mf,this__3474.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3475__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3475 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3475__delegate.call(this, _, args);
};
G__3475.cljs$lang$maxFixedArity = 1;
G__3475.cljs$lang$applyTo = (function (arglist__3476){
var _ = cljs.core.first(arglist__3476);
var args = cljs.core.rest(arglist__3476);
return G__3475__delegate.call(this, _, args);
});
return G__3475;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
