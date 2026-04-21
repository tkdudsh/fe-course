/**
* MYSQL :: 정형 데이터를 저장하는 데이터베이스 
- SQL 문법을 사용하여 데이터를 CRUD 한다.
- C(Create:생성, insert)
- R(Read:조회, select) 
- U(Update:수정, update)
- D(Delete:삭제, delete)
- 개발자는 DML에 대한 CRUD 명령어를 잘 사용할 수 있어야한다!!!
- SQL은 대소문자 구분하지 않음, 보통 소문자로 작성
- snake 방식의 네이밍 규칙을 가짐

- SQL은 크게 DDL, DML, DCL, DTL로 구분할 수 있다.
1. DDL(Data Definition Language) : 데이터 정의어
   : 데이터를 저장하기 위한 공간을 생성하고 논리적으로 정의하는 언어
   : create, alter, truncate, drop 
2. DML(Data Manipulation Language) : 데이터 조작어
   : 데이터를 CRUD하는 명령어
   : insert, select, update, delete
3. DCL(Data Control Language) : 데이터 제어어
   : 데이터에 대한 권한과 보안을 정의하는 언어
   : grant, revoke
4. DTL(Data Transaction Language,TCL) : 트랜잭션 제어어
   : 데이터베이스의 처리 작업 단위인 트랜잭션을 관리하는 언어
   : commit, save, rollback
*/

/* 반드시 기억해주세요!!! - 워크벤치 실행시 마다 명령어 실행!!!! */
show databases;  	-- 모든 데이터베이스 조회
use hrdb2019;  		-- 사용할 데이터베이스 오픈
select database(); 	-- 데이터베이스 선택
show tables;		-- 데이터베이스의 모든 테이블 조회

/**************************************
	DESC(DESCRIBE) : 테이블 구조 확인
    형식> desc(describe) [테이블명];
***************************************/
show tables;
desc employee;
desc department;
desc unit;
desc vacation;

/**************************************
	SELECT  : 테이블 내용 조회
    형식> SELECT [컬럼리스트] FROM [테이블명];
***************************************/
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT EMP_NAME, GENDER, HIRE_DATE FROM EMPLOYEE;



-- 사원테이블의 사번, 사원명, 성별, 입사일, 급여를 조회

select emp_id,emp_name,emp_gender,emp_hire_date,salary from employee;
SELECT EMP_ID, EMP_NAME,GENDER,HIRE_DATE FROM EMPLOYEE;
-- 부서테이블의 모든 정보 조회

SELECT * FROM department;



-- AS  : 컬럼명 별칭 부여 
-- 형식> SELECT [컬럼명 as 별칭, ...] FROM [테이블명];
-- 사원테이블의 사번, 사원명, 성별, 입사일, 급여 컬럼을 조회한 한글 컬럼명으로 출력
select emp_id as 사번 from employee;
select emp_id 사번 from employee;
select emp_name as 사원명 ,
	hire_date as 입사일,
    salary as 급여 from employee;

-- 사원테이블의 ID, NAME, GENDER, HDATE, SALARY 컬럼명으로 조회


-- 사원테이블의 사번, 사원명, 부서명, 폰번호, 이메일, 급여, 보너스(급여*10%)를 조회
-- 기존의 컬럼에 연산을 수행하여 새로운 컬럼을 생성할 수 있다!!   `    


-- 현재 날짜를 조회 : CURDATE()


/**************************************
	SELECT  : 테이블 내용 상세 조회
    형식> SELECT [컬럼리스트] 
			FROM [테이블명]
            WHERE [조건절];		 
***************************************/
-- 정주고 사원의 정보를 조회1


-- SYS 부서에 속한 모든 사원을 조회 


-- 사번이 S0005인 사원의 사원명, 성별, 입사일, 부서아이디, 이메일, 급여를 조회


-- SYS 부서에 속한 모든 사원들을 조회, 단 출력되는 EMP_ID 컬럼은 '사원번호' 별칭으로 조회


-- EMP_NAME '사원명' 별칭 수정


-- !! WHERE 조건절 컬럼으로 별칭을 사용할 수 있을까요???
-- 사원명이 홍길동인 사원을 별칭으로 조회??? ::: WHERE 조건절에서 별칭을 컬럼명으로 사용X 


-- 전략기획(STG) 부서의 모든 사원들의 사번, 사원명, 입사일, 급여를 조회


-- 입사일이 2014년 8월 1일인 사원들을 조회


-- 급여가 5000인 사원들을 조회


-- 성별이 남자인 사원들을 조회

-- 성별이 여자인 사원들을 조회


-- NULL : 아직 정의되지 않은 미지수
-- 숫자에서는 가장 큰수로 인식, 논리적인 의미를 포함하고 있으므로 등호(=)로는 검색 X, IS 키워드와 함께 사용 O

-- 급여가 NULL인 값을 가진 사원들을 조회


-- 영어이름이 정해지지 않은 사원들을 조회


-- 퇴사하지 않은 사원들을 조회


-- 퇴사하지 않은 사원들의 보너스 컬럼(급여*20%)을 추가하여 조회, 컬럼명은 BONUS

-- 퇴사한 사원들의 사번, 사원명, 이메일, 폰번호, 급여를 조회


-- IFNULL 함수 : NULL 값을 다른 값은 대체하는 방법
-- 형식> IFNULL(NULL포함컬럼명, 대체값)

-- STG 부서에 속한 사원들의 정보 조회, 단, 급여가 NULL인 사원은 0으로 치환


-- 사원 전체 테이블의 내용을 조회, 단 영어이름이 정해지지 않은 사원들은 'SMITH' 이름으로 치환
SELECT EMP_ID, EMP_NAME, IFNULL(ENG_NAME, 'SMITH') AS ENG_NAME, HIRE_DATE, SALARY
FROM EMPLOYEE;

-- MKT 부서의 사원들을 조회, 재직중인 사원들의 RETIRE_DATE 컬럼은 현재 날짜로 치환
select  EMP_ID, EMP_NAME  from employee where dept_id='mkt'
/**************************************
	DISTINCT  : 중복된 데이터를 배제하고 조회
    형식> SELECT DISTINCT [컬럼리스트] ~				
***************************************/
-- 사원테이블의 부서리스트를 조회


-- 주의!! UNIQUE한 컬럼과 함께 조회하는 경우 DISTINCT가 적용되지 않음


/**************************************
	--ORDER BY 컬럼 : 데이터 정렬 
    --형식> SELECT [컬럼리스트] 
		--	FROM [테이블]
          --  WHERE [조건절]
		 --ORDER BY [컬럼명, ...] ASC/DESC
***************************************/

-- 급여를 기준으로 오름차순 정렬

SELECT * from employee order by salary desc;

-- 모든 사원을 급여, 성별을 기준으로 오름차순 정렬

Select * from employee order by salary, gender asc;

-- ENG_NAME이 널인 사원들을 입사일 기준으로 내림차순 정렬

select eng_name is null from employee order by hire_date desc;
-- 퇴직한 사원들을 급여기준으로 내림차순 정렬


-- 퇴직한 사원들을 급여기준으로 내림차순 정렬, SALARY 컬럼을 '급여' 별칭으로 치환
select emp_id,emp_name,hire_date,retire_date,salary as '급여' from employee order by salary desc;
-- '급여' 별칭으로 ORDER BY가 가능할까요???  :: 별칭으로 ORDER BY 가능함
--  WHERE 조건절 데이터 탐색 > 컬럼리스트 > 정렬


-- 정보시스템(SYS) 부서 사원들 중 입사일이 빠른 순서, 급여를 많이 받는 순서로 정렬
select emp_id,emp_name,hire_date as '입사입',salary as '급여' from employee where dept_id='sys' order by '입사일' asc, '급여' desc;
-- HIRE_DATE, SALARY 컬럼은 '입사일','급여' 별칭으로 컬럼리스트 생성 후 정렬


/**************************************
	조건절 + 비교연산자 : 특정 범위 혹은 데이터 검색
    형식> SELECT [컬럼리스트] 
			FROM [테이블]
            WHERE [조건절]
		 ORDER BY [컬럼명, ...] ASC/DESC
***************************************/
-- 급여가 5000 이상인 사원들을 조회, 급여를 오름차순 정렬
select * from employee where salary>=5000 order by salary asc;

-- 2017-01-01 이후 입사한 사원들을 조회
select * from employee where hire_date > '2017-01-01';

-- 입사일이 2015-01-01 이후이거나, 급여가 6000인 이상인 사원들을 조회  
-- ~이거나, ~또는 : OR - 두 개의 조건중 하나만 만족해도 조회가능
select * from employee where hire_date > '2017-01-01' or salary >=6000;

-- 입사일이 2015-01-01 이후이고, 급여가 6000인 이상인 사원들을 조회  
-- ~이고 : AND - 두 개의 조건이 모두 만족해야만 조회 가능
select * from employee where hire_date > '2017-01-01' and salary >=5000;


-- 특정 기간 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
-- 부서기준으로 오름차순 정렬
select * from employee where hire_date>='2015-01-01' and hire_date<='2017-12-31';


-- 급여가 6000 이상 8000 이하인 사원들을 모두 조회


-- MKT 부서의 사원들의 사번, 사원명, 입사일, 이메일, 급여, 보너스(급여의 20%) 조회
-- 급여가 NULL인 사원의 보너스는 기본 50
-- 보너스가 1000 이상인 사원 조회
-- 보너스가 높은 사원 기준으로 정렬


-- 사원명이 '일지매','오삼식','김삼순' 인 사원들을 조회


/******************************************************
	논리곱(AND) : BETWEEN ~ AND 
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] BETWEEN 값1 AND 값2;
	논리합(OR) : IN
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] IN (값1, 값2, 값3...);	 
******************************************************/
-- BETWEEN ~ AND
-- 특정 기간 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
-- 부서기준으로 오름차순 정렬

select * from employee where hire_date between '2015-01-01' and '2017-12-31';
-- 급여가 6000 이상 8000 이하인 사원들을 모두 조회
select * from employee where salary between '6000' and '8000'order by salary desc;
-- IN
-- 사원명이 '일지매','오삼식','김삼순' 인 사원들을 조회
select * from employee where emp_name='일지매' or emp_name='오삼식' or emp_name='김삼순';
select * from employee where emp_name in ('일지매','오삼식','김삼순');

-- 부서아이디가 MKT, SYS, STG 에 속한 모든 사원 조회
select * from employee where dept_id='MKT' or dept_id='SYS' or dept_id='STG' order by dept_id;


/******************************************************
	특정 문자열 검색 : 와일드 문자(%, _) + LIKE 연산자
					% : 전체, _ : 한글자
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] LIKE '와일드 문자 포함 검색어';		 
******************************************************/
-- '한'씨 성을 가진 모든 사원을 조회
select * from employee where emp_name like '한%';

-- 영어이름이 'f'로 시작하는 모든 사원을 조회
select * from employee where eng_name like 'f%';

-- 이메일 이름 중 두번째 자리에 'a'가 들어가는 모든 사원을 조회
select * from employee where email like '_a%';

-- 이메일 아이디가 4자인 모든 사원을 조회
select * from employee where email like '____@%';

select * from employee where dept_id like '%a%';


/**************************************************
내장함수 : 숫자함수, 문자함수, 날짜함수 
호출되는 위치 -[컬럼리스트],[조건절의 컬럼명]
/**************************************************/
-- 숫자함수
-- 함수 실습을 위한 테이블 : DUAL
-- 1. 절대값 : abs(숫자)

select abs(100),abs(-100) from dual;

-- 소수점 절삭
select floor(123.456), truncate(123.456),truncate(123.456,2) from dual;

select * from employee where dept_id = 'SYS';

-- rand()

select rand() from dual;

select floor(rand()*1000) as number from dual;

select truncate(rand() *10000,2) from dual; 

select mod(floor((rand()*1000)+1),2) as result
	from dual;
    
-- 문자함수
-- 1 concat( 문자열1, 문자열2) : 문자열 결합 함수
select concat('하','시','바') from dual;

-- 사원테이블의 사원번호, 사원명, 사원명2 컬럼을 생성하여 조회
-- 사원명2 컬럼을 데이터 형식 : 예) S0001(홍길동)

select emp_id emp_name, concat( emp_id, '(',emp_name,')')as emp_name2 from employee;

select emp_id,emp_name,concat(emp_name,'/',eng_name) as eng_name,hire_date,phone,salary from employee;

-- (2) substring (문자열, 위치, 갯수)공백도 문자열 포함
select substring('대한민국 만세',1,4) as str1 from dual;

select emp_id,emp_name,substring(hire_date,1,4) as 입사년도 from employee;

select* from employee where substring( hire_date,1,4)='2015';
select * from employee where dept_id="SYS" and substring(hire_date,1,4)='2018';

select left(curdate(),4)as year, substring(curdate(),6,2)as month, right(curdate(),2)as day from dual;

select * from employee where left(hire_date,4) ='2018';
-- 사원번호, 사원명, 입사일, 폰번호, 급여를 조회/ 폰번호는 마지막 4자리만 출력

-- 4 upper(문자열), lower(문자열): 대소문자로 치환

select upper('welcomeTosql') as upper, lower('welcomeToSql') as lower from dual;

select * from employee;
select emp_id,emp_name,upper(eng_name) as eng_name ,lower(dept_id)as dept_id from employee;

-- 5 trim(문자열): 앞,뒤 공백 제거.


-- 6 format(문자열, 소수점 자리) : 문자열 포맷 
select format(123456,0) as format1,
		format('123456',0) as format2
        from dual;
        
        
select emp_id,emp_name,hire_date,phone,format(ifnull(salary,0),0) as salary,format(salary*0.2,0) as bonus from employee
where substring(hire_date,1,4) between '2016' and '2017' order by emp_id desc;

-- 날짜 함수
-- curdate() : 년-월-일 형식으로 현재날짜 출력
select curdate() as today from dual;

-- 형변환 함수
-- cast(변환값 as 데이터타입)
-- convert(변환값 as 데이터타입)
select 123 as number , cast(123 as char) as str from dual;

-- signed integer, unsigned integer
select '1234' as string, cast('1234' as signed integer) as cast_int, cast('1234' as unsigned integer) as cast_int from dual;

-- replace(문자열, old ,new)
select '홍-길-동' as old, replace('홍-길-동','-','/') as new from dual;

select emp_id,emp_name,replace(hire_date,'-','/')as hire_date,replace(ifnull(retire_date,curdate()),'-','/') as retire_date,dept_id,phone,format(salary,0) as salary from employee;
 
select * from employee where hire_date >= cast('20150101' as date);

select * from employee where hire_date between cast('20150101'as date) and cast('20171231'as date);

/********************************
집계 함수 : sum(),avg(),count(),min(),max()...
호출되는 위치 - [컬럼리스트],[조건절의 컬럼명]
group by - 그룹함수를 적용하기 위한 그룹핑 컬럼 정의
having - 그룹함수에서 사용하는 조건절
** 그룹함수는 그룹핑이 가능한 컬럼에 적용하는 것이 굿~
*********************************/

select * from employee;
-- 1 sum: 전체 총합을 구하는 함수
select sum(salary) from employee;

-- 2.avg: 전체 평균을 구하는 함수
-- 사원들의 전체 급여 평균을 조회, 3자리씩 ','로 구분하고 앞에 '$' 표시
-- 2026-04-21 기준 급여가 null이면 0으로 기본값 정의, 소수점은 절삭




