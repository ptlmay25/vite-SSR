import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ClosePolicy = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col px-0 box-border items-center justify-center text-left text-17xl text-gray-100 font-roboto">
      <div className="self-stretch cursor-pointer bg-white h-[70px] flex flex-row py-3.5 px-[42px] box-border items-center justify-between">
        <img
          className="relative w-[120.88px] h-9 overflow-hidden shrink-0"
          alt=""
          src="/logo_w.svg"
          onClick={onLogoClick}
        />
        <a
          href="mailto:support@myclub100.com"
          target="_blank"
          className="cursor-pointer py-0 px-2.5 bg-white self-stretch rounded-xs8 box-border w-[140px] hover:text-white text-[#212121] flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid hover:bg-[#4A93FF] border-[#212121]"
        >
          <div className="flex-1 relative text-lg font-regular font-roboto text-center flex items-center justify-center h-6">
            Contact Us
          </div>
        </a>
      </div>
      <div className="self-stretch px-[120px] mb-[120px] py-[100px] flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="text-center text-neutral-800 text-2xl font-normal">
          Account closure policy
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            Effective Date: [ 01/07/2023 ]
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            1. Introduction
            <br />
            <br />
            This Account Closure Policy ("Policy") outlines the procedures and
            guidelines for the closure of user accounts on "Club 100" ("we,"
            "our," or "us") platforms and services. This Policy applies to all
            users who wish to close their accounts and details the actions we
            will take to terminate account access privileges and delete
            associated data.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            2. Account Closure Process
            <br />
            <br />
            2.1. Request for Account Closure
            <br />
            <br />
            Users who wish to close their accounts must follow the account
            closure process as outlined below:
            <br />
            <br />
            a) Account Closure Form: Users must complete the designated account
            closure form available on our website. The form will require users
            to provide relevant account information to ensure the accurate
            identification and closure of the account.
            <br />
            <br />
            b) Verification: To ensure the security of our users' accounts, we
            may require additional verification steps to confirm the account
            owner's identity. This may include providing specific account
            information, verifying the email address associated with the
            account, or other reasonable measures to prevent unauthorized
            account closure.
            <br />
            <br />
            2.2. Immediate Termination of Account Access Privileges
            <br />
            <br />
            Upon receipt of a valid account closure request, we will promptly
            terminate the user's access privileges to their account and
            associated services. The termination process may include revoking
            login credentials, disabling account functionality, and preventing
            further access to the account.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            3. Data Deletion
            <br />
            <br />
            3.1. Retention Period
            <br />
            <br />
            Following account closure, we will retain the user's account data
            for a period of "90" days, as required by applicable laws and
            regulations or our internal policies. During this retention period,
            the account data will remain securely stored and inaccessible to the
            user or any unauthorized parties.
            <br />
            <br />
            3.2. Permanent Deletion
            <br />
            <br />
            At the end of the retention period, we will permanently delete the
            user's account data from our systems, including any backups or
            redundant copies, unless otherwise required by law or legitimate
            business purposes. Once data is deleted, it cannot be recovered, and
            the user will no longer have access to any associated information.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            4. User Responsibilities
            <br />
            <br />
            Users are responsible for taking any necessary actions to safeguard
            their data before requesting account closure. It is the user's
            responsibility to backup any important data or information stored
            within their account, as we cannot be held liable for the loss of
            any data once the account is closed.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            5. Exceptions
            <br />
            <br />
            In certain circumstances, we may be legally or operationally
            obligated to retain certain user data, even after account closure.
            These exceptions may include, but are not limited to:
            <br />
            <br />- Compliance with legal obligations or governmental requests.
            <br />- Resolving disputes, enforcing our terms of service, or
            protecting the rights and safety of our users and the public.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            6. Modifications to the Policy
            <br />
            <br />
            We reserve the right to modify or update this Account Closure Policy
            at any time, in our sole discretion. Any changes to the Policy will
            be communicated to users through appropriate means, such as email
            notifications or prominent announcements on our website.
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            7. Contact Information
            <br />
            <br />
            If you have any questions, concerns, or requests regarding the
            closure of your account or the account closure policy, please
            contact our customer support team at [contact details].
          </div>
        </div>
        <div className="flex-col py-[5px] justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-neutral-800 text-base font-normal">
            By submitting the account closure form, you acknowledge that you
            have read and understood the terms outlined in this Account Closure
            Policy and agree to abide by them.
            <br />
            <br />
            Last updated: [ 01/07/2023 ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosePolicy;
