goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____2072 = reader;

if(cljs.core.truth_(and__3546__auto____2072))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____2072;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____2073 = (read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____2073))
{return or__3548__auto____2073;
} else
{var or__3548__auto____2074 = (read_char["_"]);

if(cljs.core.truth_(or__3548__auto____2074))
{return or__3548__auto____2074;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____2075 = reader;

if(cljs.core.truth_(and__3546__auto____2075))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____2075;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____2076 = (unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____2076))
{return or__3548__auto____2076;
} else
{var or__3548__auto____2077 = (unread["_"]);

if(cljs.core.truth_(or__3548__auto____2077))
{return or__3548__auto____2077;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__2078 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__2078.buffer_atom))))
{var idx__2079 = cljs.core.deref.call(null,this__2078.index_atom);

cljs.core.swap_BANG_.call(null,this__2078.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__2078.s,idx__2079);
} else
{var buf__2080 = cljs.core.deref.call(null,this__2078.buffer_atom);

cljs.core.swap_BANG_.call(null,this__2078.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__2080);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__2081 = this;
return cljs.core.swap_BANG_.call(null,this__2081.buffer_atom,(function (p1__2071_SHARP_){
return cljs.core.cons.call(null,ch,p1__2071_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____2082 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____2082))
{return or__3548__auto____2082;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____2083 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____2083))
{return or__3548__auto____2083;
} else
{var and__3546__auto____2085 = (function (){var or__3548__auto____2084 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____2084))
{return or__3548__auto____2084;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____2085))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__2086 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__2086);
return next_ch__2086;
})());
} else
{return and__3546__auto____2085;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__2087){
var rdr = cljs.core.first(arglist__2087);
var msg = cljs.core.rest(arglist__2087);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____2088 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____2088))
{var and__3546__auto____2089 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____2089))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____2089;
}
} else
{return and__3546__auto____2088;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__2090 = (new goog.string.StringBuffer(initch));
var ch__2091 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____2092 = cljs.core.nil_QMARK_.call(null,ch__2091);

if(cljs.core.truth_(or__3548__auto____2092))
{return or__3548__auto____2092;
} else
{var or__3548__auto____2093 = cljs.reader.whitespace_QMARK_.call(null,ch__2091);

if(cljs.core.truth_(or__3548__auto____2093))
{return or__3548__auto____2093;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__2091);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__2091);
return sb__2090.toString();
} else
{{
var G__2094 = (function (){sb__2090.append(ch__2091);
return sb__2090;
})();
var G__2095 = cljs.reader.read_char.call(null,rdr);
sb__2090 = G__2094;
ch__2091 = G__2095;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__2096 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____2097 = cljs.core._EQ_.call(null,ch__2096,"n");

if(cljs.core.truth_(or__3548__auto____2097))
{return or__3548__auto____2097;
} else
{var or__3548__auto____2098 = cljs.core._EQ_.call(null,ch__2096,"r");

if(cljs.core.truth_(or__3548__auto____2098))
{return or__3548__auto____2098;
} else
{return cljs.core.nil_QMARK_.call(null,ch__2096);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.match_int = (function match_int(s){
var groups__2099 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__2099,2)))
{return 0;
} else
{var negate__2101 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__2099,1)))?-1:1);
var vec__2100__2102 = (cljs.core.truth_(cljs.core.nth.call(null,groups__2099,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2099,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2099,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2099,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2099,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2099,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2099,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2099,7),parseInt.call(null,cljs.core.nth.call(null,groups__2099,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__2103 = cljs.core.nth.call(null,vec__2100__2102,0,null);
var radix__2104 = cljs.core.nth.call(null,vec__2100__2102,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__2103)))
{return null;
} else
{return cljs.core._STAR_.call(null,negate__2101,parseInt.call(null,n__2103,radix__2104));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__2105 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__2106 = cljs.core.nth.call(null,groups__2105,1);
var denominator__2107 = cljs.core.nth.call(null,groups__2105,2);

return cljs.core._SLASH_.call(null,parseInt.call(null,numinator__2106),parseInt.call(null,denominator__2107));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__2108 = cljs.reader.read_char.call(null,reader);
var mapresult__2109 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__2108);

if(cljs.core.truth_(mapresult__2109))
{return mapresult__2109;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____2110 = cljs.core._EQ_.call(null,"u",ch__2108);

if(cljs.core.truth_(or__3548__auto____2110))
{return or__3548__auto____2110;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__2108);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__2108);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__2108);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__2111 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__2111)))
{{
var G__2112 = cljs.reader.read_char.call(null,rdr);
ch__2111 = G__2112;
continue;
}
} else
{return ch__2111;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__2113 = cljs.core.Vector.fromArray([]);

while(true){
var ch__2114 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__2114))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__2114)))
{return a__2113;
} else
{var temp__3695__auto____2115 = cljs.core.get.call(null,cljs.reader.macros,ch__2114);

if(cljs.core.truth_(temp__3695__auto____2115))
{var macrofn__2116 = temp__3695__auto____2115;

var mret__2117 = macrofn__2116.call(null,rdr,ch__2114);

{
var G__2119 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__2117,rdr))?a__2113:cljs.core.conj.call(null,a__2113,mret__2117));
a__2113 = G__2119;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__2114);
var o__2118 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__2120 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__2118,rdr))?a__2113:cljs.core.conj.call(null,a__2113,o__2118));
a__2113 = G__2120;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__2121 = cljs.reader.read_char.call(null,rdr);
var dm__2122 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__2121);

if(cljs.core.truth_(dm__2122))
{return dm__2122.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__2121);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__2123 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__2123))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__2123);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__2124 = (new goog.string.StringBuffer(initch));
var ch__2125 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____2126 = cljs.core.nil_QMARK_.call(null,ch__2125);

if(cljs.core.truth_(or__3548__auto____2126))
{return or__3548__auto____2126;
} else
{var or__3548__auto____2127 = cljs.reader.whitespace_QMARK_.call(null,ch__2125);

if(cljs.core.truth_(or__3548__auto____2127))
{return or__3548__auto____2127;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__2125);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__2125);
var s__2128 = buffer__2124.toString();

var or__3548__auto____2129 = cljs.reader.match_number.call(null,s__2128);

if(cljs.core.truth_(or__3548__auto____2129))
{return or__3548__auto____2129;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__2128,"]");
}
} else
{{
var G__2130 = (function (){buffer__2124.append(ch__2125);
return buffer__2124;
})();
var G__2131 = cljs.reader.read_char.call(null,reader);
buffer__2124 = G__2130;
ch__2125 = G__2131;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__2132 = (new goog.string.StringBuffer());
var ch__2133 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2133)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__2133)))
{{
var G__2134 = (function (){buffer__2132.append(cljs.reader.escape_char.call(null,buffer__2132,reader));
return buffer__2132;
})();
var G__2135 = cljs.reader.read_char.call(null,reader);
buffer__2132 = G__2134;
ch__2133 = G__2135;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__2133)))
{return buffer__2132.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__2136 = (function (){buffer__2132.append(ch__2133);
return buffer__2132;
})();
var G__2137 = cljs.reader.read_char.call(null,reader);
buffer__2132 = G__2136;
ch__2133 = G__2137;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__2138 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__2138,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__2138,0,token__2138.indexOf("/")),cljs.core.subs.call(null,cljs.core.inc.call(null,token__2138.indexOf("/")),token__2138.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__2138,cljs.core.symbol.call(null,token__2138));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__2139 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__2139,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__2139,0,token__2139.indexOf("/")),cljs.core.subs.call(null,token__2139,cljs.core.inc.call(null,token__2139.indexOf("/")),token__2139.length));
} else
{return cljs.core.keyword.call(null,token__2139);
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__2140 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__2140)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__2141 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__167__auto____2142 = o__2141;

if(cljs.core.truth_((function (){var and__3546__auto____2143 = x__167__auto____2142;

if(cljs.core.truth_(and__3546__auto____2143))
{return x__167__auto____2142.cljs$core$IWithMeta$;
} else
{return and__3546__auto____2143;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__167__auto____2142);
}
})()))
{return cljs.core.with_meta.call(null,o__2141,cljs.core.merge.call(null,cljs.core.meta.call(null,o__2141),m__2140));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__2144 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2144)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__2144)))
{{
var G__2146 = reader;
var G__2147 = eof_is_error;
var G__2148 = sentinel;
var G__2149 = is_recursive;
reader = G__2146;
eof_is_error = G__2147;
sentinel = G__2148;
is_recursive = G__2149;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__2144)))
{{
var G__2150 = cljs.reader.read_comment.call(null,reader,ch__2144);
var G__2151 = eof_is_error;
var G__2152 = sentinel;
var G__2153 = is_recursive;
reader = G__2150;
eof_is_error = G__2151;
sentinel = G__2152;
is_recursive = G__2153;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__2145 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__2144))?cljs.reader.macros.call(null,ch__2144).call(null,reader,ch__2144):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__2144))?cljs.reader.read_number.call(null,reader,ch__2144):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__2144):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__2145,reader)))
{{
var G__2154 = reader;
var G__2155 = eof_is_error;
var G__2156 = sentinel;
var G__2157 = is_recursive;
reader = G__2154;
eof_is_error = G__2155;
sentinel = G__2156;
is_recursive = G__2157;
continue;
}
} else
{return res__2145;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__2158 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__2158,true,null,false);
});
