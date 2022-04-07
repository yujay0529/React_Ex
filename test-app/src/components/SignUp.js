import React , { UseState }from "react";

function SignUp(){

     //state
     const [user, setUser] = UseState(''
    //      {
    //     userId: '',
    //     userPw: '',
    //     userconfPw: '',
	// 	userNic:'',
    //     userName: '',
    //     userPhone:'',
    //     userEmail: '',
    //     comOp:'',
    //     comNo:''
        
    // }
    );

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setUser({
            ...user, // 기존의 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

  

    const onSubmit = (e) => {
        e.preventDefault();	
		
		if (user.userId === "") { //해당 입력값이 없을 경우 같은말: if(!uid.value)
			alert("아이디를 입력하세요.");
			user.userId.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
			
		}
		if (user.userPw === "") {
			alert("비밀번호를 입력하세요.");
			user.userPw.focus();
		}
	
		if (user.userPw !== user.userconfPw) {
			alert("비밀번호가 일치하지 않습니다.");
			user.userconfPw.focus();
		}

        if (user.userNic === "") {
			alert("닉네임을 입력하세요.");
			user.userNic.focus();
		}
	
		if (user.userName === "") {
			alert("이름을 입력하세요.");
			user.userName.focus();
		}
	
		if (user.userEmail === "") {
			alert("이메일 주소를 입력하세요.");
			user.userEmail.focus();
		}
	
		if (user.userPhone === "") {
			alert("휴대폰 번호를 입력하세요.");
			user.userPhone.focus();
		}

        alert("회원가입 완료")
      // 입력된 value 값을 파라미터로 전달
    
 
        
	}



return(

    <div className='container'>
        <h3>아이디 생성 및 인증</h3>

        <form name ="SingUp" onSubmit={onSubmit}>

            <div className="id">
                <h4>아이디</h4>
                <input type="text"  name="userId" maxlength="25" placeholder="아이디 입력" value={user.userId} onChange={onChange}/>
                <button className="check_btn">중복확인</button>
                <p>아이디는  5자~20자 영문,숫자만 사용가능합니다.</p>
            </div>
            <div className="nickName">
                <h4>닉네임</h4>
                <input type="text"  name="userNic" maxlength="25" placeholder="닉네임 입력" value={user.userNic} onChange={onChange}/>
                <button className="check_btn">중복확인</button>
                <p>닉네임은 5자~20자 영문,숫자만 사용가능합니다.</p>
            </div>

            <div className="pw">
                <h4>비밀번호</h4>
                <input type="password"  name="userpw" maxlength="25" placeholder="비밀번호 입력" value={user.userPw} onChange={onChange}/>
                <input type="password"  name="userconfPw" maxlength="25" placeholder="비밀번호 확인" value={user.userconfPw} onChange={onChange}/>
                <p>비밀번호는 영문 대,소문자 숫자 2가지 이상을 조합해주세요.</p>
            </div>

            <div className="phone">
                <h4>핸드폰 인증</h4>
                <input type="text"  name="userPhone" maxlength="25" placeholder="핸드폰 번호 입력" value={user.userPhone} onChange={onChange}/>
                <button className="phone_btn">인증하기</button>
            </div>

            <div className="Email">
                <h4>이메일 인증</h4>
                <input type="text"  name="userEmail" maxlength="25" placeholder="이메일 입력" value={user.userEmail} onChange={onChange}/>
                <button className="email_btn">인증하기</button>
            </div>

            <div className="Com">
                <h4>고객사 선택(선택사항)</h4>
                <input type="text"  name="comOp" maxlength="25" placeholder="고객사 선택" value={user.comOp} onChange={onChange}/>
                <input type="text"  name="comNo" maxlength="25" placeholder="고객번호 입력" value={user.comNo} onChange={onChange}/>
                <p>고객사는 선택사항이며 추후 정보 등록을 통해 수정 가능합니다. </p>
            </div>

            <div className="submit_btn">
                <button type="submit">가입하기</button>
            </div>

        </form>

    
    </div>
);
}


export default SignUp;